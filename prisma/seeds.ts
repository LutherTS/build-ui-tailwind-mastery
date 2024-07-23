import {
  alliesIds,
  characters,
  enemiesIds,
  neutralsIds,
} from "@/app/utilities/characters";
import prisma from "./db";
// import { announces, messages, welcomes } from "@/app/utilities/messages";

const charactersArray = Object.entries(characters);

async function seed() {
  console.log(`Beginning seeds...`);

  for (const character of charactersArray) {
    const characterId = character[0];
    const characterName = character[1];

    const server = await prisma.server.upsert({
      where: {
        id: characterId,
      },
      update: {},
      create: {
        id: characterId,
      },
    });

    // welcome, announcements
    const category0 = await prisma.category.upsert({
      where: {
        id_serverId: {
          id: 0,
          serverId: server.identifier,
        },
      },
      update: {},
      create: { id: 0, label: "", serverId: server.identifier },
    });

    const welcomeChannel = await prisma.channel.upsert({
      where: {
        id_categoryId: {
          id: "98",
          categoryId: category0.identifier,
        },
      },
      update: {},
      create: {
        id: "98",
        label: "welcome",
        unread: false,
        description: `Welcome to ${characterName}'s server.`,
        categoryId: category0.identifier,
      },
    });

    // const welcomeMessageData = welcomes[characterId][0];

    // welcomeMessage
    // await prisma.message.create({
    //   data: {
    //     id: welcomeMessageData.id,
    //     user: welcomeMessageData.user,
    //     avatarUrl: welcomeMessageData.avatarUrl,
    //     date: welcomeMessageData.date,
    //     text: welcomeMessageData.text,
    //     channelId: welcomeChannel.identifier,
    //   },
    // });

    const announcementsChannel = await prisma.channel.upsert({
      where: {
        id_categoryId: {
          id: "99",
          categoryId: category0.identifier,
        },
      },
      update: {},
      create: {
        id: "99",
        label: "announcements",
        unread: false,
        description: `Announcements from the Book where ${characterName} first appeared in.`,
        categoryId: category0.identifier,
      },
    });

    // const announcementsMessageData = announces[characterId][0];

    // announcementsMessage
    // await prisma.message.create({
    //   data: {
    //     id: announcementsMessageData.id,
    //     user: announcementsMessageData.user,
    //     avatarUrl: announcementsMessageData.avatarUrl,
    //     date: announcementsMessageData.date,
    //     text: announcementsMessageData.text,
    //     channelId: announcementsChannel.identifier,
    //   },
    // });

    // Allies/Other allies
    const category1 = await prisma.category.upsert({
      where: {
        id_serverId: {
          id: 1,
          serverId: server.identifier,
        },
      },
      update: {},
      create: {
        id: 1,
        label: alliesIds.has(characterId) ? "Other allies" : "Allies",
        serverId: server.identifier,
      },
    });

    const characterAlliesIds = [...alliesIds].filter((e) => e !== characterId);

    for (const allyId of characterAlliesIds) {
      const allyChannel = await prisma.channel.upsert({
        where: {
          id_categoryId: {
            id: allyId,
            categoryId: category1.identifier,
          },
        },
        update: {},
        create: {
          id: allyId,
          label: characters[allyId].toLocaleLowerCase().replaceAll(" ", "-"),
          unread: false,
          description: "",
          categoryId: category1.identifier,
        },
      });

      // const characterMessages = messages[allyId];
      // for (const characterMessage of characterMessages) {
      //   await prisma.message.create({
      //     data: {
      //       id: characterMessage.id,
      //       user: characterMessage.user,
      //       avatarUrl: characterMessage.avatarUrl,
      //       date: characterMessage.date,
      //       text: characterMessage.text,
      //       channelId: allyChannel.identifier,
      //     },
      //   });
      // }
    }

    // Enemies/Other enemies
    const category2 = await prisma.category.upsert({
      where: {
        id_serverId: {
          id: 2,
          serverId: server.identifier,
        },
      },
      update: {},
      create: {
        id: 2,
        label: enemiesIds.has(characterId) ? "Other enemies" : "Enemies",
        serverId: server.identifier,
      },
    });

    const characterEnemiesIds = [...enemiesIds].filter(
      (e) => e !== characterId,
    );

    for (const enemyId of characterEnemiesIds) {
      const enemyChannel = await prisma.channel.upsert({
        where: {
          id_categoryId: {
            id: enemyId,
            categoryId: category2.identifier,
          },
        },
        update: {},
        create: {
          id: enemyId,
          label: characters[enemyId].toLocaleLowerCase().replaceAll(" ", "-"),
          unread: false,
          description: "",
          categoryId: category2.identifier,
        },
      });

      // const characterMessages = messages[enemyId];
      // for (const characterMessage of characterMessages) {
      //   await prisma.message.create({
      //     data: {
      //       id: characterMessage.id,
      //       user: characterMessage.user,
      //       avatarUrl: characterMessage.avatarUrl,
      //       date: characterMessage.date,
      //       text: characterMessage.text,
      //       channelId: enemyChannel.identifier,
      //     },
      //   });
      // }
    }

    // neutrals
    const category3 = await prisma.category.upsert({
      where: {
        id_serverId: {
          id: 3,
          serverId: server.identifier,
        },
      },
      update: {},
      create: { id: 3, label: "", serverId: server.identifier },
    });

    const characterNeutralsIds = [...neutralsIds].filter(
      (e) => e !== characterId,
    );

    for (const neutralId of characterNeutralsIds) {
      const neutralChannel = await prisma.channel.upsert({
        where: {
          id_categoryId: {
            id: neutralId,
            categoryId: category3.identifier,
          },
        },
        update: {},
        create: {
          id: neutralId,
          label: characters[neutralId].toLocaleLowerCase().replaceAll(" ", "-"),
          unread: false,
          description: "",
          categoryId: category3.identifier,
        },
      });

      // const characterMessages = messages[neutralId];
      // for (const characterMessage of characterMessages) {
      //   await prisma.message.create({
      //     data: {
      //       id: characterMessage.id,
      //       user: characterMessage.user,
      //       avatarUrl: characterMessage.avatarUrl,
      //       date: characterMessage.date,
      //       text: characterMessage.text,
      //       channelId: neutralChannel.identifier,
      //     },
      //   });
      // }
    }
  }

  console.log(`Seeds complete...`);
}

seed();

/* Notes
Messages are not being used in the final version, they are imported locally since they're the same across all servers.
*/

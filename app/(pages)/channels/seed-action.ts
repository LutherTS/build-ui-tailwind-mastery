"use server";

import { revalidatePath } from "next/cache";
import {
  alliesIds,
  characters,
  enemiesIds,
  neutralsIds,
} from "@/app/utilities/characters";
import prisma from "@/prisma/db";

export async function seedAction() {
  const charactersArray = Object.entries(characters);

  console.log("Beginning deployment seeds...");

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
    }
  }

  console.log("...Deployment seeds complete.");

  revalidatePath("/channels", "layout");
}

/* Notes
I just pasted the whole seeds to avoid all the "Import trace for requested module"s. Which is also why I explicitely called my files and functions seedAction, SeedButton and SeedForm. 
*/

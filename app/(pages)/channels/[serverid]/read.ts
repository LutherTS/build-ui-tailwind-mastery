"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { RedirectType, notFound, redirect } from "next/navigation";
import randomInteger from "random-int";

export async function read(
  href: string,
  unread: boolean,
  serverId: string,
  channelId: string,
) {
  if (unread)
    await prisma.channel.updateMany({
      where: {
        id: channelId,
        category: {
          server: {
            id: serverId,
          },
        },
      },
      data: {
        unread: false,
      },
    });

  // const serverTimes = randomInteger(1, 21);
  // const excluded = ["1", "2", "3", "9"];

  // const unreadServerIds = new Set<string>();
  // for (let i = 0; i < serverTimes; i++) {
  //   const randomServerId = randomInteger(1, 39).toString();
  //   if (!excluded.includes(randomServerId)) unreadServerIds.add(randomServerId);
  // }

  // const unreadServers = [...unreadServerIds];

  // const identifiers: {
  //   identifier: number;
  // }[] = [];

  // for (let unreadServer of unreadServers) {
  //   const identifier = await prisma.server.findFirst({
  //     select: {
  //       identifier: true,
  //     },
  //     where: {
  //       id: unreadServer,
  //     },
  //   });

  //   if (!identifier) notFound();
  //   else identifiers.push(identifier);
  // }

  // const orIds = [...unreadServerIds].map((e, i, a) => {
  //   const channeltimes = randomInteger(1, 21);

  //   const unreadChannelsIds = new Set<string>();
  //   for (let i = 0; i < channeltimes; i++) {
  //     const randomChannelsId = randomInteger(1, 39).toString();
  //     if (!excluded.includes(randomChannelsId))
  //       unreadChannelsIds.add(randomChannelsId);
  //   }

  //   const unreadChannels = [...unreadChannelsIds].map((e, i, a) => {
  //     return { id: e };
  //   });

  //   return {
  //     id: e,
  //     identifier: identifiers[i].identifier,
  //     unreadChannelsIds: unreadChannels,
  //   };
  // });

  // await prisma.channel.updateMany({
  //   data: {
  //     unread: false,
  //   },
  // });

  // for (const orId of orIds) {
  //   await prisma.channel.updateMany({
  //     where: {
  //       category: {
  //         serverId: orId.identifier,
  //       },
  //       OR:
  //         orId.unreadChannelsIds.length > 0
  //           ? orId.unreadChannelsIds
  //           : undefined,
  //     },
  //     data: {
  //       unread: true,
  //     },
  //   });
  // }

  // revalidatePath("/channels", "layout");
  redirect(href);
}

/* Notes
Making it explicitly a button with no redirects.
*/

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/prisma/db";

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

  const unreadLeft = await prisma.channel.count({
    where: {
      id: channelId,
      category: {
        server: {
          id: serverId,
        },
      },
      unread: true,
    },
  });

  if (unreadLeft === 0) revalidatePath("/channels", "layout");
  redirect(href);
}

/* Notes
redirect(href, RedirectType.replace);
*/

import randomInteger from "random-int";

import * as Icons from "@/app/components/icons";
import {
  alliesIds,
  characters,
  enemiesIds,
  neutralsIds,
} from "@/app/utilities/characters";
import { Channels } from "./channels";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";

export default async function ServerLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    serverid: string;
  };
}>) {
  const times = randomInteger(20);

  const unreadIds = new Set();
  for (let i = 0; i < times; i++) {
    unreadIds.add(randomInteger(1, 39).toString());
  }

  const serverId = params.serverid;

  //

  const server = await prisma.server.findFirst({
    include: {
      categories: {
        include: {
          channels: {},
        },
      },
    },
    where: {
      id: serverId,
    },
  });

  if (!server) {
    notFound();
  }

  const databaseData = {
    [server.id]: {
      label: characters[server.id],
      categories: server.categories,
    },
  };

  //

  const channels = [[...alliesIds], [...enemiesIds], [...neutralsIds]].map(
    (e) => {
      return e
        .filter((e2) => e2 !== serverId)
        .map((e2) => {
          return {
            id: e2,
            label: characters[e2].toLocaleLowerCase().replaceAll(" ", "-"),
            unread: unreadIds.has(e2),
          };
        });
    },
  );

  const alliesChannels = channels[0];
  const enemiesChannels = channels[1];
  const neutralsChannels = channels[2];

  const data = {
    [serverId]: {
      label: characters[serverId],
      categories: [
        {
          id: 0,
          label: "",
          channels: [
            {
              id: "98",
              label: "welcome",
              unread: false,
              description: `Welcome to ${characters[serverId]}'s server.`,
            },
            {
              id: "99",
              label: "announcements",
              unread: false,
              description: `Announcements from the Book I first appeared in.`,
            },
          ],
        },
        {
          id: 1,
          label: alliesIds.has(serverId) ? "Other allies" : "Allies",
          channels: alliesChannels,
        },
        {
          id: 2,
          label: enemiesIds.has(serverId) ? "Other enemies" : "Enemies",
          channels: enemiesChannels,
        },
        {
          id: 3,
          label: "",
          channels: neutralsChannels,
        },
      ],
    },
  };

  return (
    <>
      <div className="hidden w-60 flex-col bg-gray-800 md:flex">
        <button className="flex h-12 items-center px-4 font-ginto text-[15px] text-white shadow-sm transition hover:bg-gray-550/[.16]">
          {alliesIds.has(serverId) && (
            <div className="relative mr-1 size-4">
              <Icons.Verified className="absolute size-4 text-gray-550" />
              <Icons.Check className="absolute size-4" />
            </div>
          )}
          {characters[serverId]}'s Server
          <Icons.Chevron className="ml-auto size-[18px] opacity-80" />
        </button>
        <div className="flex-1 overflow-y-scroll overscroll-none font-medium text-gray-300">
          {/* no margin top because overflow-y-scroll */}
          <div className="h-3"></div>
          <Channels data={databaseData} serverId={serverId} />
          {/* // data now instructed from a database // */}
          {/* <Channels data={data} serverId={serverId} /> */}
          {/* spacers used instead */}
          <div className="h-3"></div>
        </div>
      </div>
      {children}
    </>
  );
}

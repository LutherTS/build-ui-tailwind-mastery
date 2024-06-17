import { revalidatePath } from "next/cache";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";
import randomInteger from "random-int";

import * as Icons from "@/app/components/icons";

export default async function ChannelsPage() {
  // const serverTimes = randomInteger(1, 21);
  // const excluded = ["1", "2", "3", "9"];
  // console.log(serverTimes);

  // const unreadServerIds = new Set<string>();
  // for (let i = 0; i < serverTimes; i++) {
  //   const randomServerId = randomInteger(1, 39).toString();
  //   if (!excluded.includes(randomServerId)) unreadServerIds.add(randomServerId);
  // }
  // console.log(unreadServerIds);

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
  // console.log(identifiers);

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
  // console.log(orIds[0].unreadChannelsIds);

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

  // revalidatePath("/", "layout"); // I don't think that's currently working

  return (
    <>
      <div className="hidden w-60 flex-col bg-gray-800 md:flex">
        <div className="flex h-12 items-center px-4 font-ginto text-[15px] text-white shadow-sm transition hover:bg-gray-550/[.16]">
          {/* Dashboard */}
          Discord BuildUI
        </div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          {/* <p className="text-white">Friends</p>
          <p className="text-white">Nitro</p>
          <p className="text-white">Shop</p> */}
          {/* {Array.from({ length: 37 }, (_, i) => {
            return <p key={i + 4}>channel {i + 4}</p>;
          })} */}
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700">
        <div className="flex h-12 flex-shrink-0 items-center px-2 shadow-sm">
          {/* general */}
          <div className="flex items-center">
            <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
            <span className="mr-2 whitespace-nowrap font-ginto text-white">
              tailwind-mastery
            </span>
          </div>
          <div className="mx-2 hidden h-6 w-px bg-white/[.06] md:block"></div>
          <div className="mx-2 hidden truncate text-sm font-medium text-gray-200 md:block">
            Click a server to start. Clicking the Discord icon randomizes unread
            channels.
          </div>
        </div>
        <div className="flex-1 space-y-4 overflow-y-scroll p-3">
          {/* {Array.from({ length: 40 }, (_, i) => {
            return (
              <p key={i + 1}>
                Message {i + 1}. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Porro, itaque. Suscipit accusantium eos esse
                totam doloribus sint vel quae, modi ab sit nihil tenetur. Quia
                iste enim cum sint corporis.
              </p>
            );
          })} */}
        </div>
      </div>
    </>
  );
}

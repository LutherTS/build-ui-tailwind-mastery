// import { revalidatePath } from "next/cache";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";
import randomInteger from "random-int";

export default async function ChannelsPage() {
  // revalidatePath("/"); // I don't think that's currently working

  const serverTimes = randomInteger(1, 21);
  const excluded = ["1", "2", "3", "9"];
  console.log(serverTimes);

  const unreadServerIds = new Set<string>();
  for (let i = 0; i < serverTimes; i++) {
    const randomServerId = randomInteger(1, 39).toString();
    if (!excluded.includes(randomServerId)) unreadServerIds.add(randomServerId);
  }
  console.log(unreadServerIds);

  const unreadServers = [...unreadServerIds];

  const identifiers: {
    identifier: number;
  }[] = [];

  for (let unreadServer of unreadServers) {
    const identifier = await prisma.server.findFirst({
      select: {
        identifier: true,
      },
      where: {
        id: unreadServer,
      },
    });

    if (!identifier) notFound();
    else identifiers.push(identifier);
  }
  console.log(identifiers);

  const orIds = [...unreadServerIds].map((e, i, a) => {
    const channeltimes = randomInteger(1, 21);

    const unreadChannelsIds = new Set<string>();
    for (let i = 0; i < channeltimes; i++) {
      const randomChannelsId = randomInteger(1, 39).toString();
      if (!excluded.includes(randomChannelsId))
        unreadChannelsIds.add(randomChannelsId);
    }

    const unreadChannels = [...unreadChannelsIds].map((e, i, a) => {
      return { id: e };
    });

    return {
      id: e,
      identifier: identifiers[i].identifier,
      unreadChannelsIds: unreadChannels,
    };
  });
  console.log(orIds[0].unreadChannelsIds);

  await prisma.channel.updateMany({
    data: {
      unread: false,
    },
  });

  for (const orId of orIds) {
    await prisma.channel.updateMany({
      where: {
        category: {
          serverId: orId.identifier,
        },
        OR:
          orId.unreadChannelsIds.length > 0
            ? orId.unreadChannelsIds
            : undefined,
      },
      data: {
        unread: true,
      },
    });
  }

  // const servers = await prisma.server.findMany({

  // })

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center px-3 font-ginto text-white shadow-md">
          {/* Dashboard */}
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
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 flex-shrink-0 items-center px-3 shadow-md">
          {/* general */}
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

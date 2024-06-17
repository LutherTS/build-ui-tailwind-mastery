import Image from "next/image";

import prisma from "@/prisma/db";

import * as Icons from "@/app/components/icons";
import { ServerButton } from "./server-button";
import { ServerLink } from "./server-link";

export default async function ChannelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const servers = await prisma.server.findMany({
    take: 35,
  });

  const unreadServers = await prisma.server.findMany({
    where: {
      categories: {
        some: {
          channels: {
            some: {
              unread: true,
            },
          },
        },
      },
    },
    take: 35,
  });

  const unreadServerIdentifiers = unreadServers.map((e, i, a) => {
    return e.identifier;
  });

  return (
    <>
      <div className="flex h-screen font-whitney text-gray-100">
        <div className="hidden space-y-2 overflow-y-scroll overscroll-none bg-gray-900 p-3 md:block">
          <div>
            <ServerButton href={`/channels`}>
              <Icons.Discord className="h-5 w-7" />
            </ServerButton>
            <hr className="mx-2 mt-2 rounded border-t-2 border-t-white/[.06]" />
          </div>
          {servers.map((server) => {
            return (
              <ServerLink
                unread={unreadServerIdentifiers.includes(server.identifier)}
                key={server.id}
                href={`/channels/${server.id}/98`}
              >
                <Image
                  src={`/feh-characters/character_thumb_${server.id}.png`}
                  alt={`${server.id}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // trying a default for warning handling
                  fill
                />
              </ServerLink>
            );
          })}
          {/* // data now instructed from a database // */}
          {/* {Array.from({ length: 40 }, (_, i) => {
            if (i === 0)
              return (
                <div key={i}>
                  <ServerLink href={`/channels`}>
                    <Icons.Discord className="h-5 w-7" />
                  </ServerLink>
                  <hr className="mx-2 mt-2 rounded border-t-2 border-t-white/[.06]" />
                </div>
              );
            if (i !== 0 && ![1, 2, 3, 9].includes(i))
              // 9 being turned-good Veronica
              // 1 to 3 being from the current chapter
              return (
                <ServerLink key={i} href={`/channels/${i}/98`}>
                  <Image
                    src={`/feh-characters/character_thumb_${i}.png`}
                    alt={`${i}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // trying a default for warning handling
                    fill
                  />
                </ServerLink>
              );
          })} */}
        </div>
        {children}
      </div>
    </>
  );
}

/* Notes
I think the solution I'm going to use finding a way for the /channels route to do a hard refresh. At least for now. Going back from template.tsx to layout.tsx. Or just to experiment I can keep it a template.tsx.
I see now what a template does, it reloads itself at each click as seen in terms of positioning.
That means perhaps... My solution is for the main layout to actually be a template. (In the end it was a server action with revalidate layout.)
*/

import randomInteger from "random-int";

import * as Icons from "@/app/components/icons";
import { ChannelLink } from "./channel-link";
import { CategoryButton } from "./category-button";
import {
  alliesIds,
  characters,
  enemiesIds,
  neutralsIds,
} from "@/app/utilities/characters";

export default function ServerLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    serverid: string;
  };
}>) {
  const times = randomInteger(30);
  console.log(times);

  const set = new Set();
  for (let i = 0; i < times; i++) {
    set.add(randomInteger(1, 39).toString());
  }

  const unreadIds = [...set];
  console.log(unreadIds);

  const serverId = params.serverid;

  const channels = [[...alliesIds], [...enemiesIds], [...neutralsIds]].map(
    (e) => {
      return e
        .filter((e2) => e2 !== serverId)
        .map((e2) => {
          return {
            id: e2,
            label: characters[e2].toLocaleLowerCase().replaceAll(" ", "-"),
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
            { id: "98", label: "welcome" },
            { id: "99", label: "announcements" },
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
      <div className="flex w-60 flex-col bg-gray-800">
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
        <div className="flex-1 overflow-y-scroll font-medium text-gray-300">
          {/* no margin top because overflow-y-scroll */}
          <div className="h-3"></div>
          {/* START */}
          {data[serverId].categories.map((category) => {
            return (
              <div key={category.id}>
                <div
                  className={`${category.id !== 0 ? "mb-[5px] mt-[21px]" : ""}`}
                >
                  {category.label && (
                    <CategoryButton>{category.label}</CategoryButton>
                  )}
                </div>
                <div className="space-y-0.5">
                  {category.channels.map((channel) => {
                    return (
                      <ChannelLink
                        key={channel.id}
                        href={`/channels/${serverId}/${channel.id}`}
                      >
                        {channel.id === "98" && (
                          <Icons.Book className="mr-1.5 size-5 text-gray-400" />
                        )}
                        {channel.id === "99" && (
                          <Icons.Speakerphone className="mr-1.5 size-5 text-gray-400" />
                        )}
                        {!["98", "99"].includes(channel.id) && (
                          <Icons.Hashtag className="mr-1.5 size-5 text-gray-400" />
                        )}
                        {channel.label}
                      </ChannelLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {/* END */}
          {/* spacers used instead */}
          <div className="h-3"></div>
        </div>
      </div>
      {children}
    </>
  );
}

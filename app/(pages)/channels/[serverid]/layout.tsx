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
  const serverId = params.serverid;

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
          <div className="space-y-0.5">
            <ChannelLink href={`/channels/${serverId}/98`}>
              <Icons.Book className="mr-1.5 size-5 text-gray-400" />
              welcome
            </ChannelLink>
            <ChannelLink href={`/channels/${serverId}/99`}>
              <Icons.Speakerphone className="mr-1.5 size-5 text-gray-400" />
              announcements
            </ChannelLink>
            {/* <p className="text-white">channel 1 (unread)</p>
          <p className="text-white">channel 2 (unread)</p> */}
          </div>
          <div className="mb-[5px] mt-[21px]">
            <CategoryButton>
              {alliesIds.has(serverId) ? "Other allies" : "Allies"}
            </CategoryButton>
          </div>
          <div className="space-y-0.5">
            {[...alliesIds].map((e) => {
              if (e !== serverId)
                return (
                  <ChannelLink key={e} href={`/channels/${serverId}/${e}`}>
                    <Icons.Hashtag className="mr-1.5 size-5 text-gray-400" />
                    {characters[e].toLocaleLowerCase().replaceAll(" ", "-")}
                  </ChannelLink>
                );
            })}
          </div>
          <div className="mb-[5px] mt-[21px]">
            <CategoryButton>
              {enemiesIds.has(serverId) ? "Other enemies" : "Enemies"}
            </CategoryButton>
          </div>
          <div className="space-y-0.5">
            {[...enemiesIds].map((e) => {
              if (e !== serverId)
                return (
                  <ChannelLink key={e} href={`/channels/${serverId}/${e}`}>
                    <Icons.Hashtag className="mr-1.5 size-5 text-gray-400" />
                    {characters[e].toLocaleLowerCase().replaceAll(" ", "-")}
                  </ChannelLink>
                );
            })}
          </div>
          <div className="space-y-0.5">
            <div className="mb-[5px] mt-[21px]">
              {/* without category button, keeping the spacing */}
            </div>
            {[...neutralsIds].map((e) => {
              if (e !== serverId)
                return (
                  <ChannelLink key={e} href={`/channels/${serverId}/${e}`}>
                    <Icons.Hashtag className="mr-1.5 size-5 text-gray-400" />
                    {characters[e].toLocaleLowerCase().replaceAll(" ", "-")}
                  </ChannelLink>
                );
            })}
          </div>
          {/* spacers used instead */}
          <div className="h-3"></div>
        </div>
      </div>
      {children}
    </>
  );
}

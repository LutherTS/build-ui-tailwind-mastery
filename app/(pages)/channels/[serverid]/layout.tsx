import {
  BookIcon,
  CheckIcon,
  ChevronIcon,
  HashtagIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from "@/app/components/icons";
import { ChannelLink } from "./channel-link";

const servers: { [key: string]: string } = {
  1: "Ratatoskr",
  2: "Hræsvelgr",
  3: "Níðhöggr",
  4: "Seiðr",
  5: "Gullveig",
  6: "Heiðr",
  7: "Nerþuz",
  8: "Kvasir",
  9: "Veronica",
  10: "Ash",
  11: "Elm",
  12: "Letizia",
  13: "Embla",
  14: "Askr",
  15: "Reginn",
  16: "Ótr",
  17: "Fáfnir",
  18: "Dagr",
  19: "Nótt",
  20: "Eitri",
  21: "Peony",
  22: "Mirabilis",
  23: "Freyr",
  24: "Freyja",
  25: "Triandra",
  26: "Plumeria",
  27: "Eir",
  28: "Thrasir",
  29: "Líf",
  30: "Hel",
  31: "Fjorm",
  32: "Surtr",
  33: "Loki",
  34: "Thórr",
  35: "Alfonse",
  36: "Sharena",
  37: "Anna",
  38: "Veronica",
  39: "Mysterious Man",
};

const alliesIds = new Set([
  "1",
  "2",
  "3",
  "4",
  "6",
  "7",
  "8",
  "9",
  "10",
  "14",
  "15",
  "18",
  "19",
  "21",
  "22",
  "23",
  "27",
  "31",
  "35",
  "36",
  "37",
]);

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
        <button className="hover:bg-gray-550/[.16] flex h-12 items-center px-4 font-ginto text-[15px] text-white shadow-sm transition">
          {alliesIds.has(serverId) && (
            <div className="relative mr-1 size-4">
              <VerifiedIcon className="text-gray-550 absolute size-4" />
              <CheckIcon className="absolute size-4" />
            </div>
          )}
          {servers[serverId]}'s Server
          <ChevronIcon className="ml-auto size-[18px] opacity-80" />
        </button>
        <div className="mt-[17px] flex-1 overflow-y-scroll font-medium text-gray-300">
          <div className="space-y-0.5">
            <ChannelLink href={`/channels/${serverId}/1`}>
              <BookIcon className="mr-1.5 size-5 text-gray-400" />
              welcome
            </ChannelLink>
            <ChannelLink href={`/channels/${serverId}/2`}>
              <SpeakerphoneIcon className="mr-1.5 size-5 text-gray-400" />
              announcements
            </ChannelLink>
            {/* <p className="text-white">channel 1 (unread)</p>
          <p className="text-white">channel 2 (unread)</p> */}
            {Array.from({ length: 38 }, (_, i) => {
              return (
                <ChannelLink
                  key={i + 3}
                  href={`/channels/${serverId}/${i + 3}`}
                >
                  <HashtagIcon className="mr-1.5 size-5 text-gray-400" />
                  channel-{i + 3}
                </ChannelLink>
              );
            })}
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

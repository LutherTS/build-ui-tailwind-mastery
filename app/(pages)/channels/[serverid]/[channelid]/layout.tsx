import * as Icons from "@/app/components/icons";
import { characters } from "@/app/utilities/characters";

const specialChannels: {
  [key: string]: {
    label: string;
    description: string;
  };
} = {
  98: {
    label: "welcome",
    description: "",
  },

  99: { label: "announcements", description: "" },
};

const specialIds = new Set(["98", "99"]);

export default function ChannelLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    serverid: string;
    channelid: string;
  };
}>) {
  const serverId = params.serverid;
  const channelId = params.channelid;

  specialChannels["98"].description =
    `Welcome to ${characters[serverId]}'s server.`;
  specialChannels["99"].description =
    `Announcements from the Book where ${characters[serverId]} first appeared in.`;

  return (
    <>
      <div className="flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700">
        <div className="flex h-12 flex-shrink-0 items-center px-2 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
            <span className="mr-2 whitespace-nowrap font-ginto text-white">
              {specialIds.has(channelId)
                ? `${specialChannels[channelId].label}`
                : `${characters[channelId].toLocaleLowerCase().replaceAll(" ", "-")}`}
            </span>
          </div>

          {/* For this, only #welcome and #announcements have descriptions. */}
          {specialIds.has(channelId) && (
            <>
              <div className="mx-2 hidden h-6 w-px bg-white/[.06] md:block"></div>
              <div className="mx-2 hidden truncate text-sm font-medium text-gray-200 md:block">
                {specialChannels[channelId].description}
              </div>
            </>
          )}

          {/* Mobile */}
          <div className="ml-auto flex items-center md:hidden">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="mx-2 h-6 w-6" />
            </button>
          </div>

          {/* Desktop */}
          <div className="ml-auto hidden items-center md:flex">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="mx-2 h-6 w-6" />
            </button>
            <div className="relative mx-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder:text-gray-400"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <Icons.Hourglass className="mr-1.5 size-4 text-gray-400" />
              </div>
            </div>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="mx-2 h-6 w-6" />
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

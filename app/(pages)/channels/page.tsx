import * as Icons from "@/app/components/icons";

export default function ChannelsPage() {
  return (
    <>
      <div className="hidden w-60 flex-col bg-gray-800 md:flex">
        <div className="flex h-12 items-center px-4 font-ginto text-[15px] text-white shadow-sm transition hover:bg-gray-550/[.16]">
          Discord BuildUI
        </div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300"></div>
      </div>
      <div className="flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700">
        <div className="flex h-12 flex-shrink-0 items-center px-2 shadow-sm">
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
        <div className="flex-1 space-y-4 overflow-y-scroll p-3"></div>
      </div>
    </>
  );
}

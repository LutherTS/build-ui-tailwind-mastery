"use client";

import { usePathname } from "next/navigation";

import * as Icons from "@/app/components/icons";
import { read } from "./read";

export function ChannelButton({
  children,
  href,
  unread,
  serverId,
  channelId,
  categoryIsClosed,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  unread: boolean;
  serverId: string;
  channelId: string;
  categoryIsClosed?: boolean;
}>) {
  const updateUserWithId = read.bind(null, href, unread, serverId, channelId);

  const pathname = usePathname();
  const isPathname = href === pathname;

  const state = isPathname
    ? "active"
    : unread
      ? "inactiveUnread"
      : "inactiveRead";
  const classes = {
    active: "bg-gray-550/[.32] text-white",
    inactiveUnread:
      "text-white hover:bg-gray-550/[.16] active:bg-gray-550/[.24]",
    inactiveRead:
      "text-gray-300 hover:bg-gray-550/[.16] hover:text-gray-100 active:bg-gray-550/[.24]",
  };

  return (
    <form
      action={updateUserWithId}
      className={`relative mx-2 ${categoryIsClosed && state === "inactiveRead" ? "hidden" : ""}`}
    >
      <button
        className={`group peer flex w-full items-center rounded px-2 py-1 ${
          classes[state]
        } `}
      >
        {children}
        <Icons.AddPerson className="ml-auto size-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      </button>
      <div
        className={`absolute -left-2 top-0 flex h-full flex-col justify-center ${
          state === "inactiveUnread" ? "*:bg-opacity-100" : "*:bg-opacity-0"
        }`}
      >
        <div className="h-2 w-1 rounded-r-full bg-white" />
      </div>
    </form>
  );
}

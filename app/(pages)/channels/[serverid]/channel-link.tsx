"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AddPerson } from "@/app/components/icons";

export function ChannelLink({
  children,
  href,
  unread,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  unread: boolean;
}>) {
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
    <div className="relative">
      <Link
        href={href}
        className={`group peer mx-2 flex items-center rounded px-2 py-1 ${
          classes[state]
          // isPathname
          //   ? "bg-gray-550/[.32] text-white"
          //   : "text-gray-300 hover:bg-gray-550/[.16] hover:text-gray-100"
        } `}
      >
        {children}
        <AddPerson className="ml-auto size-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
        {/* for Tailwind Prettier */}
        <div className=""></div>
      </Link>
      <div
        className={`absolute top-0 flex h-full flex-col justify-center ${
          state === "inactiveUnread" ? "*:bg-opacity-100" : "*:bg-opacity-0"
        }`}
      >
        <div className="h-2 w-1 rounded-r-full bg-white" />
      </div>
    </div>
  );
}

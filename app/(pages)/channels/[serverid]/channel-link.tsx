"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AddPerson } from "@/app/components/icons";

export function ChannelLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const pathname = usePathname();
  const isPathname = href === pathname;

  return (
    <Link
      href={href}
      className={`group mx-2 flex items-center rounded px-2 py-1 ${
        isPathname
          ? "bg-gray-550/[.16] text-gray-100"
          : "text-gray-300 hover:bg-gray-550/[.16] hover:text-gray-100"
      }`}
    >
      {children}
      <AddPerson className="ml-auto size-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </Link>
  );
}

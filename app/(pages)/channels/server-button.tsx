"use client";

import { usePathname } from "next/navigation";
import { randomize } from "./randomize";

export function ServerButton({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const pathname = usePathname();
  const isPathname = href === pathname;

  return (
    <form action={randomize} className="relative">
      <button className="group peer block active:translate-y-px">
        <div
          className={`relative flex size-icon items-center justify-center overflow-hidden transition-all duration-200 ${
            isPathname
              ? "rounded-icon-hover bg-brand text-white"
              : "rounded-icon bg-gray-700 text-gray-100 group-hover:rounded-icon-hover group-hover:bg-brand group-hover:text-white"
          }`}
        >
          {children}
        </div>
      </button>
      <div
        className={`absolute -left-3 top-0 flex h-full flex-col justify-center ${
          isPathname
            ? "*:h-10"
            : "*:h-5 *:scale-0 *:bg-opacity-0 *:peer-hover:scale-100 *:peer-hover:bg-opacity-100"
        }`}
      >
        <div className="w-1 origin-left rounded-r bg-white transition-all duration-200" />
      </div>
    </form>
  );
}

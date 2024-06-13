"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServerLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const pathname = usePathname();
  const isPathname = pathname === href;
  return (
    <div className="relative">
      <Link
        href={href}
        className={`group peer block transition-all duration-200 active:translate-y-0.5`}
      >
        <div
          className={`size-icon flex items-center justify-center transition-all duration-200 ${
            isPathname
              ? "bg-brand rounded-icon-hover text-white"
              : "group-hover:bg-brand rounded-icon group-hover:rounded-icon-hover bg-gray-700 text-gray-100 group-hover:text-white"
          }`}
        >
          {children}
        </div>
      </Link>
      <div
        className={`absolute -left-3 top-0 flex h-full flex-col justify-center ${
          isPathname
            ? "*:h-10"
            : "*:h-5 *:scale-0 *:bg-opacity-0 *:peer-hover:scale-100 *:peer-hover:bg-opacity-100"
        }`}
      >
        <div className="w-1 origin-left rounded-r bg-white transition-all duration-200" />
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServerLink({
  children,
  href,
  unread,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  unread: boolean;
}>) {
  const pathname = usePathname();
  const parentPath = pathname.split("/").slice(0, -1).join("/").concat("/");
  const hasParentPath =
    pathname === "/channels" ? href === pathname : href.startsWith(parentPath);

  return (
    <div className="relative">
      <Link href={href} className="group peer block active:translate-y-px">
        <div
          className={`relative flex size-icon items-center justify-center overflow-hidden transition-all duration-200 ${
            hasParentPath
              ? "rounded-icon-hover bg-brand text-white"
              : "rounded-icon bg-gray-700 text-gray-100 group-hover:rounded-icon-hover group-hover:bg-brand group-hover:text-white"
          }`}
        >
          {children}
        </div>
      </Link>
      <div
        className={`absolute -left-3 top-0 flex h-full flex-col justify-center ${
          hasParentPath
            ? "*:h-10"
            : "*:h-5 *:scale-0 *:bg-opacity-0 *:peer-hover:scale-100 *:peer-hover:bg-opacity-100"
        }`}
      >
        <div className="w-1 origin-left rounded-r bg-white transition-all duration-200" />
      </div>
      <div
        className={`absolute -left-3 top-0 flex h-full flex-col justify-center ${
          unread ? "*:bg-opacity-100" : "*:bg-opacity-0"
        }`}
      >
        <div className="h-2 w-1 rounded-r-full bg-white" />
      </div>
    </div>
  );
}

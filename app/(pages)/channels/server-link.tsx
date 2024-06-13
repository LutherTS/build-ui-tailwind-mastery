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
    <Link
      href={href}
      className={`${
        isPathname
          ? "bg-brand rounded-icon-hover text-white"
          : "hover:bg-brand rounded-icon hover:rounded-icon-hover bg-gray-700 text-gray-100 hover:text-white"
      } size-icon flex items-center justify-center transition-all duration-200`}
    >
      {children}
    </Link>
  );
}

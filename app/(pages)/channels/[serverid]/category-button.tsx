"use client";

import { ArrowIcon } from "@/app/components/icons";

export function CategoryButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="flex items-center px-0.5 font-ginto text-xs uppercase tracking-wide">
      <ArrowIcon className="mr-0.5 size-4" />
      {children}
    </button>
  );
}

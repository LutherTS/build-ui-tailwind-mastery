"use client";

import { MouseEventHandler } from "react";

import * as Icons from "@/app/components/icons";

export function CategoryButton({
  children,
  handleClick,
  categoryIsClosed,
}: Readonly<{
  children: React.ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  categoryIsClosed?: boolean;
}>) {
  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center px-0.5 font-ginto text-xs uppercase tracking-wide hover:text-gray-100"
    >
      <Icons.Arrow
        className={`mr-0.5 size-4 transition duration-200 ${categoryIsClosed ? "-rotate-90" : "rotate-0"}`}
      />
      {children}
    </button>
  );
}

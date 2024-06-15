"use client";

import { Arrow } from "@/app/components/icons";
import { MouseEventHandler } from "react";

export function CategoryButton({
  children,
  handleClick,
}: Readonly<{
  children: React.ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center px-0.5 font-ginto text-xs uppercase tracking-wide hover:text-gray-100"
    >
      <Arrow className="mr-0.5 size-4" />
      {children}
    </button>
  );
}

"use client";

import { Arrow } from "@/app/components/icons";

export function CategoryButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="flex w-full items-center px-0.5 font-ginto text-xs uppercase tracking-wide hover:text-gray-100">
      <Arrow className="mr-0.5 size-4" />
      {children}
    </button>
  );
}

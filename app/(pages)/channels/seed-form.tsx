"use client";

import { seedAction } from "./seed-action";
import SeedButton from "./seed-button";

export default function SeedForm() {
  return (
    <form
      action={seedAction}
      className="flex h-12 items-center px-4 font-ginto text-[15px] text-white shadow-sm transition hover:bg-gray-550/[.16]"
    >
      <SeedButton>Discord Build UI</SeedButton>
    </form>
  );
}

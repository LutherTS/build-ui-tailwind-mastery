"use client";

import { useFormStatus } from "react-dom";

export default function SeedButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="disabled:cursor-wait disabled:text-gray-500"
    >
      {children}
    </button>
  );
}

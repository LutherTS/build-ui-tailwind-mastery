import Image from "next/image";

import { ServerLink } from "./server-link";
import { Discord } from "@/app/components/icons";

export default function ChannelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen font-whitney text-gray-100">
        <div className="hidden space-y-2 overflow-y-scroll bg-gray-900 p-3 md:block">
          {Array.from({ length: 40 }, (_, i) => {
            if (i === 0)
              return (
                <div key={i}>
                  <ServerLink href={`/channels`}>
                    <Discord className="h-5 w-7" />
                  </ServerLink>
                  <hr className="mx-2 mt-2 rounded border-t-2 border-t-white/[.06]" />
                </div>
              );
            if (i !== 0 && ![1, 2, 3, 9].includes(i))
              // 9 being turned-good Veronica
              // 1 to 3 being from the current chapter
              return (
                <ServerLink key={i} href={`/channels/${i}/98`}>
                  <Image
                    src={`/feh-characters/character_thumb_${i}.png`}
                    alt={`i`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // trying a default for warning handling
                    fill
                  />
                </ServerLink>
              );
          })}
        </div>
        {children}
      </div>
    </>
  );
}

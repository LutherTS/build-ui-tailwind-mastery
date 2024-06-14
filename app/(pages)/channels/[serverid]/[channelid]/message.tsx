import Image from "next/image";

import { Message } from "@/app/utilities/messages";
import { characters } from "@/app/utilities/characters";

export function MessageWithUser({
  message,
}: Readonly<{
  message: Message;
}>) {
  return (
    <div className="mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]">
      <div className="relative mr-4 size-10 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={message.avatarUrl} alt={characters[message.user]} fill />
      </div>
      <div className="w-11/12">
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-400">
            {characters[message.user]}
          </span>
          <span className="text-xs font-medium text-gray-400">
            {message.date}
          </span>
        </p>
        <p className="text-gray-100">{message.text}</p>
      </div>
    </div>
  );
}

export function MessageWithoutUser({
  message,
}: Readonly<{
  message: Message;
}>) {
  return (
    <div className="px-4 py-0.5 leading-[22px] hover:bg-gray-950/[0.07]">
      <p className="w-11/12 pl-14 text-gray-100">{message.text}</p>
    </div>
  );
}

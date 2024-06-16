"use client";

import * as Icons from "@/app/components/icons";
import { CategoryButton } from "./category-button";
import { ChannelLink } from "./channel-link";
import { useState } from "react";

export function Channels({
  data,
  serverId,
}: Readonly<{
  data: {
    [x: string]: {
      label: string;
      categories: (
        | {
            id: number;
            label: string;
            channels: {
              id: string;
              label: string;
              unread: boolean;
              description: string;
            }[];
          }
        | {
            id: number;
            label: string;
            channels: {
              id: string;
              label: string;
              unread: boolean;
            }[];
          }
      )[];
    };
  };
  serverId: string;
}>) {
  let [closedCategories, setClosedCategories] = useState<number[]>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((e) => e !== categoryId)
        : [...closedCategories, categoryId],
    );
  }

  return (
    <>
      {data[serverId].categories.map((category) => {
        const categoryIsClosed = closedCategories.includes(category.id);

        return (
          <div key={category.id}>
            <div className={`${category.id !== 0 ? "mb-[5px] mt-[21px]" : ""}`}>
              {category.label && (
                <CategoryButton
                  handleClick={() => toggleCategory(category.id)}
                  categoryIsClosed={categoryIsClosed}
                >
                  {category.label}
                </CategoryButton>
              )}
            </div>
            <div className="space-y-0.5">
              {category.channels.map((channel) => {
                return (
                  <ChannelLink
                    key={channel.id}
                    href={`/channels/${serverId}/${channel.id}`}
                    unread={channel.unread}
                    categoryIsClosed={categoryIsClosed}
                  >
                    {channel.id === "98" && (
                      <Icons.Book className="mr-1.5 size-5 text-gray-400" />
                    )}
                    {channel.id === "99" && (
                      <Icons.Speakerphone className="mr-1.5 size-5 text-gray-400" />
                    )}
                    {!["98", "99"].includes(channel.id) && (
                      <Icons.Hashtag className="mr-1.5 size-5 text-gray-400" />
                    )}
                    {channel.label}
                  </ChannelLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

import { announces, messages, welcomes } from "@/app/utilities/messages";
import { MessageWithUser, MessageWithoutUser } from "./message";

export default function ChannelPage({
  params,
}: Readonly<{
  params: {
    serverid: string;
    channelid: string;
  };
}>) {
  const serverId = params.serverid;
  const channelId = params.channelid;

  return (
    <>
      <div className="flex-1 overflow-y-scroll">
        {channelId === "98" &&
          welcomes[serverId] &&
          welcomes[serverId].map((message, i, a) => (
            <div key={message.id}>
              {message.user !== a[i - 1]?.user ? (
                <MessageWithUser message={message} />
              ) : (
                <MessageWithoutUser message={message} />
              )}
            </div>
          ))}
        {channelId === "99" &&
          announces[serverId] &&
          announces[serverId].map((message, i, a) => (
            <div key={message.id}>
              {message.user !== a[i - 1]?.user ? (
                <MessageWithUser message={message} />
              ) : (
                <MessageWithoutUser message={message} />
              )}
            </div>
          ))}
        {messages[channelId] &&
          messages[channelId].map((message, i, a) => (
            <div key={message.id}>
              {message.user !== a[i - 1]?.user ? (
                <MessageWithUser message={message} />
              ) : (
                <MessageWithoutUser message={message} />
              )}
            </div>
          ))}
        <div className="h-5"></div>
      </div>
    </>
  );
}

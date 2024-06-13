const channels: { [key: string]: string } = {
  1: "welcome",
  2: "announcements",
};

const specialIds = new Set(["1", "2"]);

export default function ChannelLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    channelid: string;
  };
}>) {
  const channelId = params.channelid;

  return (
    <>
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 flex-shrink-0 items-center px-3 shadow-sm">
          {specialIds.has(channelId)
            ? `${channels[channelId]}`
            : `channel-${channelId}`}
        </div>
        {children}
      </div>
    </>
  );
}

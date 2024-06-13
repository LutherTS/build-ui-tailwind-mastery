export default function ServerLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    serverid: string;
  };
}>) {
  const serverId = params.serverid;

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center px-3 font-ginto text-white shadow-md">
          Server {serverId}
        </div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          <p className="text-white">channel 1 (unread)</p>
          <p className="text-white">channel 2 (unread)</p>
          {Array.from({ length: 38 }, (_, i) => {
            return <p key={i + 3}>channel {i + 3}</p>;
          })}
        </div>
      </div>
      {children}
    </>
  );
}

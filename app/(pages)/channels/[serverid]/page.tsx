export default function Server({
  params,
}: {
  params: {
    serverid: string;
  };
}) {
  const serverId = params.serverid;

  return (
    <>
      <p>Server {serverId}</p>
    </>
  );
}

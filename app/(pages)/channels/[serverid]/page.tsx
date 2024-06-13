export default function ServerPage({
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

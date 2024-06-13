export default function Server({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params.id;

  return (
    <>
      <p>Server {id}</p>
    </>
  );
}

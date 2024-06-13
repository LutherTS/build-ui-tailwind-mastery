export default function ChannelPage() {
  return (
    <>
      <div className="flex-1 space-y-4 overflow-y-scroll p-3">
        {Array.from({ length: 40 }, (_, i) => {
          return (
            <p key={i + 1}>
              Message {i + 1}. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Porro, itaque. Suscipit accusantium eos esse
              totam doloribus sint vel quae, modi ab sit nihil tenetur. Quia
              iste enim cum sint corporis.
            </p>
          );
        })}
      </div>
    </>
  );
}

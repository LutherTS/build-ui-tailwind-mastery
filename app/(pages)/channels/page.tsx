export default function ChannelsPage() {
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center px-3 font-ginto text-white shadow-md">
          Tailwind CSS
        </div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          <p className="text-white">channel 1 (unread)</p>
          <p className="text-white">channel 2 (unread)</p>
          {Array.from({ length: 38 }, (_, i) => {
            return <p key={i + 3}>channel {i + 3}</p>;
          })}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 flex-shrink-0 items-center px-3 shadow-md">
          general
        </div>
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
      </div>
    </>
  );
}

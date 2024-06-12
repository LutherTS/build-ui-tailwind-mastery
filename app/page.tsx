export default function Home() {
  return (
    <div className="flex text-gray-100 h-screen font-whitney">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {Array.from({ length: 40 }, (_, i) => {
          return (
            <div
              key={i + 1}
              className="bg-white text-gray-800 flex items-center justify-center size-12 rounded-full"
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col bg-gray-800 w-60">
        <div className="px-3 h-12 shadow-md flex items-center font-ginto text-white">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 space-y-2 overflow-y-scroll text-gray-300 font-medium">
          <p className="text-white">channel 1 (unread)</p>
          <p className="text-white">channel 2 (unread)</p>
          {Array.from({ length: 38 }, (_, i) => {
            return <p key={i + 3}>channel {i + 3}</p>;
          })}
        </div>
      </div>
      <div className="flex flex-col bg-gray-700 flex-1">
        <div className="px-3 h-12 shadow-md flex items-center flex-shrink-0">
          general
        </div>
        <div className="p-3 flex-1 space-y-4 overflow-y-scroll">
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
    </div>
  );
}

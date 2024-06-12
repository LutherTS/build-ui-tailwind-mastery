import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {Array.from({ length: 41 }, (_, i) => {
          return (
            <div
              key={i}
              className="bg-white text-gray-800 flex items-center justify-center size-12 rounded-full"
            >
              {i}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col bg-gray-700 w-60">
        <div className="px-3 h-12 shadow-md flex items-center">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 space-y-2 overflow-y-scroll">
          {Array.from({ length: 40 }, (_, i) => {
            return <p key={i + 1}>channel {i + 1}</p>;
          })}
        </div>
      </div>
      <div className="flex flex-col bg-gray-600 flex-1">
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
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-white min-h-screen">
      <div className="bg-gray-800 p-4">
        <div className="bg-white text-gray-800 flex items-center justify-center size-12 rounded-full">
          TW
        </div>
      </div>
      <div className="flex flex-col bg-gray-700 w-60">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="p-4 flex-1">channels</div>
      </div>
      <div className="flex flex-col bg-gray-600 flex-1">
        <div className="p-4 shadow-md">general</div>
        <div className="p-4 flex-1">messages</div>
      </div>
    </main>
  );
}

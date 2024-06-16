import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700 text-white">
      <div className="max-w-lg space-y-1">
        <div className="flex px-4 py-1 hover:bg-gray-800/30">
          <div className="relative mr-4 size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/adamwathan.jpeg"
              alt="Adam Wathan, creator of Tailwind"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // trying a default for warning handling
              fill
            />
          </div>
          <div>
            <p className="flex items-baseline">
              <span className="mr-2 text-sm font-medium text-green-500">
                adamwathan
              </span>
              <span className="text-xs text-gray-500">01/15/2021</span>
            </p>
            <p className="text-gray-300">
              You should never use something like leading relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger.
            </p>
          </div>
        </div>
        <div className="flex px-4 py-1 hover:bg-gray-800/30">
          <div>
            <p className="ml-14 text-gray-300">
              You can override it in your config if you want but ultimately we
              chose the defaults we did because they let you get results closest
              to what a professional designer would do more easily.
            </p>
          </div>
        </div>
        <div className="flex px-4 py-1 hover:bg-gray-800/30">
          <div>
            <p className="ml-14 text-gray-300">
              Since we changed this in Tailwind 2 I've almost never used a
              leading class at all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Intro() {
  return (
    <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg space-y-1">
        <div className="flex hover:bg-gray-800/30 px-4 py-1">
          <div className="relative flex-shrink-0 size-10 rounded-full overflow-hidden mr-4">
            <Image
              src="/adamwathan.jpeg"
              alt="Adam Wathan, creator of Tailwind"
              // width={40}
              // height={40}
              fill
            />
          </div>
          <div>
            <p className="flex items-baseline">
              <span className="text-green-500 mr-2 text-sm font-medium">
                adamwathan
              </span>
              <span className="text-gray-500 text-xs">01/15/2021</span>
            </p>
            <p className="text-gray-300">
              You should never use something like leading relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger.
            </p>
          </div>
        </div>
        <div className="flex hover:bg-gray-800/30 px-4 py-1">
          <div>
            <p className="text-gray-300 ml-14">
              You can override it in your config if you want but ultimately we
              chose the defaults we did because they let you get results closest
              to what a professional designer would do more easily.
            </p>
          </div>
        </div>
        <div className="flex hover:bg-gray-800/30 px-4 py-1">
          <div>
            <p className="text-gray-300 ml-14">
              Since we changed this in Tailwind 2 I've almost never used a
              leading class at all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

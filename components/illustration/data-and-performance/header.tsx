import type { Dispatch, SetStateAction } from 'react';
import { BsBrowserChrome, BsThreeDotsVertical } from 'react-icons/bs';
import { FaHeart, FaRegArrowAltCircleDown } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoApps, IoReload } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';

export default function Header({
  setRestartKey,
}: {
  setRestartKey: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="h-16 bg-neutral-900">
      <div className="flex h-6 items-center gap-2 px-3 pt-1">
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-full bg-red-500/90"></div>
          <div className="size-2.5 rounded-full bg-amber-500/90"></div>
          <div className="size-2.5 rounded-full bg-green-500/90"></div>
        </div>
      </div>
      <div className="flex h-10 items-center gap-2 border-y-2 border-neutral-800 bg-neutral-950/60 px-2">
        <div className="cursor-pointer rounded-md bg-neutral-800/50 p-1.5 text-neutral-300 hover:bg-neutral-700/50">
          <IoIosArrowBack />
        </div>
        <div className="cursor-pointer rounded-md p-1.5 text-neutral-500 hover:bg-neutral-700/50">
          <IoIosArrowForward />
        </div>
        <div
          onClick={() => setRestartKey((prev) => prev + 1)}
          className="cursor-pointer rounded-md p-1.5 text-neutral-300 hover:bg-neutral-700/50"
        >
          <IoReload />
        </div>
        <div className="cursor-pointer rounded-md p-1.5 text-neutral-300 hover:bg-neutral-700/50">
          <IoApps />
        </div>

        <div className="flex flex-1 items-center gap-2 rounded-md border border-neutral-800 bg-neutral-800/40 p-1.5 px-3 text-neutral-400">
          <BsBrowserChrome className="text-neutral-500" />
          <input
            type="text"
            className="h-5 w-full border-x border-neutral-700 bg-transparent px-3 text-sm text-neutral-300 outline-none"
            value="https://www.example.com"
            readOnly
          />
          <FaHeart className="cursor-pointer transition-colors hover:text-red-400" />
        </div>
        <div className="cursor-pointer rounded-md p-1.5 text-neutral-400 hover:bg-neutral-700/50">
          <FaRegArrowAltCircleDown />
        </div>
        <div className="cursor-pointer rounded-md p-1.5 text-neutral-400 hover:bg-neutral-700/50">
          <RxAvatar />
        </div>
        <div className="cursor-pointer rounded-md p-1.5 text-neutral-400 hover:bg-neutral-700/50">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
}

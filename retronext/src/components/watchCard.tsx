import { MdThumbUp } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { RiPlayListAddFill } from "react-icons/ri";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MdArrowDropDown } from "react-icons/md";

interface IWatchCard {
  id: string;
  vid: string;
  title: string;
  logo: string;
  creator: string;
  likes: number;
  description: string;
}

export default function WatchCard({
  id,
  vid,
  title,
  logo,
  creator,
  likes,
  description,
}: IWatchCard) {
  return (
    <div>
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1`}
          className="absolute inset-0 w-full h-full border-none"
        ></iframe>
      </div>
      {/* //TODO: Video Footer */}
      <p className="text-white font-medium pt-4 pb-1.5">{title}</p>
      <div className="flex items-center justify-between pr-4">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt={creator}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-category text-sm ">{creator}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border border-gray-600 rounded-2xl px-3 py-1 bg-sidebar shadow-md">
            <span className="text-category text-xl">
              <MdThumbUp />
            </span>
            <span className="text-white">{likes}</span>
          </button>
          <button className="flex items-center justify-center rounded-full p-1.5 border border-gray-600">
            <span className="text-category text-xl">
              <IoMdShareAlt />
            </span>
          </button>
          <button className="flex items-center justify-center rounded-full p-1.5  border border-gray-600">
            <span className="text-category text-lg">
              <RiPlayListAddFill />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-start py-2 text-left text-sm font-medium focus:outline-none">
                <span className="text-category font-semibold">Show more</span>
                <span
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } text-category text-lg`}
                >
                  <MdArrowDropDown />
                </span>
                {/* <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                /> */}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-5 text-sm text-gray-500 rounded-lg bg-sidebar">
                <p className="text-white font-semibold mb-2">Description :</p>
                {description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

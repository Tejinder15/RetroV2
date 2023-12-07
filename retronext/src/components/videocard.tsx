import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { MdMoreVert } from "react-icons/md";

interface IVideoCard {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  logo: string;
}

export default function VideoCard({
  id,
  title,
  thumbnail,
  creator,
  logo,
}: IVideoCard) {
  return (
    <div className="rounded-xl w-full min-w-[300px] max-w-[414px] border border-white flex flex-col bg-sidebar h-full relative">
      <div>
        <div className="relative w-full block h-[230px]">
          <Link
            href={`/watch/${id}`}
            className="overflow-hidden block absolute top-0 bottom-0 left-0 right-0 mx-auto h-full"
          >
            <Image
              src={thumbnail}
              alt={title}
              width={410}
              height={267}
              className="rounded-xl object-cover w-full h-full inline-block min-h-[1px] min-w-[1px] visible"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-start py-2.5 pr-1 group">
        <div className="w-10">
          <img
            src={logo}
            alt="creatorImg"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col px-2.5">
          {/* Video Title */}
          <span
            className="text-sm leading-tight font-medium text-title"
            title={title}
          >
            {title}
          </span>
          {/* Video Creator */}
          <span className="text-xs text-category">{creator}</span>
        </div>
        <Menu as="div" className="relative inline-block text-left ml-auto ">
          <div className="md:opacity-0 md:group-hover:opacity-100 opacity-100">
            <Menu.Button className="text-2xl text-white">
              <MdMoreVert />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-sidebar shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
              <div className="px-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-500/20 text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Add to Watchlater
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

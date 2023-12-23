import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { MdMoreVert } from "react-icons/md";

interface ISuggestedCard {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  actions: React.ButtonHTMLAttributes<HTMLButtonElement>[];
}

export default function SuggestedCard({
  id,
  title,
  thumbnail,
  creator,
  actions,
}: ISuggestedCard) {
  return (
    //     <Link href={`/watch/${id}`} className="block mb-3">
    // </Link>
    <div className="flex items-start group">
      <div className="max-w-[180px]">
        <img src={thumbnail} alt={title} className="w-full rounded-xl" />
      </div>
      <div className="flex flex-col pt-1 px-2.5">
        {/* Video Title */}
        <span
          className="text-sm leading-tight font-medium text-title"
          title={title}
        >
          {title}
        </span>
        {/* Video Creator */}
        <span className="text-xs mt-1.5 text-category">{creator}</span>
        {/* Video Views */}
        <span className="text-xs mt-1">452</span>
      </div>
      <div className="w-11 text-right ml-auto pr-3">
        <Menu
          as="div"
          className="relative inline-block text-left ml-auto md:opacity-0 md:group-hover:opacity-100 opacity-100"
        >
          <div>
            <Menu.Button className="p-2 text-white">
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
                {actions.map((item, idx) => (
                  <Menu.Item key={idx}>
                    <button
                      className={
                        "hover:bg-gray-500/20 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm"
                      }
                      {...item}
                    >
                      {item.children}
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

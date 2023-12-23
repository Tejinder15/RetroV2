import { logout } from "@/features/authSlice";
import { RootState } from "@/store";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const { username, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 left-0 z-50">
      <nav className="text-white flex items-center w-full justify-between max-h-20 bg-body py-5 px-6">
        <Link href={"/"}>
          <h1 className="font-mono text-white text-4xl font-bold">Retro</h1>
        </Link>
        {token ? (
          <Menu as="div" className="relative inline-block text-center">
            <Menu.Button className="flex items-center gap-2 px-3">
              <Image
                src={`https://api.dicebear.com/7.x/bottts-neutral/png?seed=${username}&radius=50&size=32`}
                alt="avatar"
                width={32}
                height={32}
              />
              <span className="text-sm text-category">{username}</span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right rounded-md focus:outline-none shadow-lg bg-sidebar p-1">
                <Menu.Item>
                  <button
                    className="ui-active:bg-retro rounded-md hover:bg-red py-2 px-4 text-sm w-full"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <Link
            href={"login"}
            className="bg-retro py-2 px-4 rounded-sm font-medium text-sm"
            style={{ color: "white" }}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

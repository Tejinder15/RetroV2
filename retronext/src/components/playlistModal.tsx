import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdClose } from "react-icons/md";

export default function PlaylistModal() {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between"
                >
                  <h2 className="text-xl font-sans">Save video to...</h2>
                  <button className="text-xl text-black">
                    <MdClose />
                  </button>
                </Dialog.Title>
                <div className="mt-2"></div>
                {/* TODO: For Creating New Playlist */}
                <Disclosure>
                  <Disclosure.Button>Create New </Disclosure.Button>
                  <Disclosure.Panel></Disclosure.Panel>
                </Disclosure>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

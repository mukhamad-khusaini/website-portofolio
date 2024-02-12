import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ImageShow({
  state,
  setState,
}: {
  state: { bool: true | false; imgId: string };
  setState: ({ bool, imgId }: { bool: true | false; imgId: string }) => void;
}) {
  function closeModal() {
    setState({ bool: false, imgId: "" });
  }

  return (
    <>
      <Transition appear show={state.bool} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Picture Dialog
                  </Dialog.Title>
                  <div className="mt-2">
                    {state.imgId ? (
                      <img
                        src={
                          "https://drive.google.com/thumbnail?id=" +
                          state.imgId +
                          "&sz=w1000"
                        }
                        alt="my picture"
                        className="w-full object-cover select-none"
                      />
                    ) : (
                      <p>This is exemple image :)</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-yld px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      That is cool 🥶🥶🥶
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

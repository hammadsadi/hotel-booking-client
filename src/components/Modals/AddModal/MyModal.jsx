import { Dialog, DialogPanel } from "@headlessui/react";
import PropTypes from "prop-types";
export default function MyModal({ isOpen, close, children, large }) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className={`w-full ${
                large ? "max-w-2xl" : "max-w-md"
              } rounded-xl bg-white border text-gray-800 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0`}
            >
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

MyModal.propTypes = {
  isOpen: PropTypes.bool,
  large: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.element,
};

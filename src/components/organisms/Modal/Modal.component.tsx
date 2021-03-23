import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC } from "react";
import { createPortal } from "react-dom";
import BackDrop from "src/components/atoms/BackDrop";
import { useClickOutside } from "src/hooks";

interface Props {
  open: boolean;
  className?: string;
  onClose?: () => void;
}

const variants: Variants = {
  enter: {
    opacity: 1,
    scale: 1,
    y: "0rem",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  leave: {
    opacity: 0,
    scale: 0.95,
    y: "1rem",
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

const Modal: FC<Props> = ({ className, open, children, onClose }) => {
  const { ref } = useClickOutside<HTMLDivElement>(onClose);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen sm:block sm:p-0 text-center">
            <BackDrop />

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <motion.div
              initial="leave"
              animate="enter"
              exit="leave"
              variants={variants}
              ref={ref}
              className={[
                "inline-block overflow-hidden rounded-lg shadow-xl sm:max-w-lg sm:w-full",
                className,
              ].join(" ")}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ModalPortal: FC<Props> = (props) => {
  return createPortal(
    <Modal {...props} />,
    document.getElementsByTagName("body")[0]
  );
};

export default ModalPortal;

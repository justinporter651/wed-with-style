import { motion } from "framer-motion";
import { FC, MouseEventHandler, ReactChild } from "react";

interface backdropProps {
  children: ReactChild;
  handleClose: MouseEventHandler;
}

const Backdrop: FC<backdropProps> = ({ children, handleClose }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="backdropClose xxlarge fs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeOut" } }}
        onClick={handleClose}
      >
        Close
      </motion.h1>
      {children}
    </motion.div>
  );
};

export default Backdrop;

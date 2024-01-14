import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "../../../utils/cn";

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = "",
  key = null,
  style = {},
}) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={key}
          initial={initial}
          animate={animate}
          transition={transition}
          className={cn(`${className} max-w-fit `)}
          style={style}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimationWrapper;

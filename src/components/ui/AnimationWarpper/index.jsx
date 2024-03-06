import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import cn from "@utils/cn";

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = "",
  props,
}) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={initial}
          animate={animate}
          transition={transition}
          className={cn(`max-w-fit `, className)}
          {...props}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default memo(AnimationWrapper);

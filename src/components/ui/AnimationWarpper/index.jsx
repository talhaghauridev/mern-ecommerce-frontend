import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "../../../utils/cn";
import { memo } from "react";

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = "",
  key = "",
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
          className={cn(`max-w-fit `,className)}
          style={style}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default memo(AnimationWrapper);

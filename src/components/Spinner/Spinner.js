import React from "react";
import { motion } from "framer-motion";
import loading from "./spin-back.gif";

const Spinner = () => {
  return (
    <div class="container">
      <motion.div
        animate={{
          scale: [0.5, 1.3, 1],
        }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <img img src={loading} alt="cur" class="center-loading" />
      </motion.div>
    </div>
  );
};

export default Spinner;

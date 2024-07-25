"use client";

import { motion } from "framer-motion";

const Button = ({ name, className, onClick }) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      className={`bg-[#76C1F3] text-white font-semibold p-5 ${className}`}
      onClick={onClick}
    >
      {name}
    </motion.button>
  );
};

export default Button;

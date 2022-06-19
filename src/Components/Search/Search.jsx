import React from "react";
import "./Search.scss";
import { motion } from "framer-motion";

const scaleVarient = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="search_container">
        <h1>Search</h1>
      </div>
    </motion.div>
  );
};

export default Search;

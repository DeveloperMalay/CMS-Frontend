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
      whileInView={{  opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="search_container">
        <h1>Search</h1>
      </div>
    </motion.div>
  );
};

export default Search;

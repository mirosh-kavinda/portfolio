import React from "react";
import "../../css/Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const {  
    id,
    projectName,
    category,
    description
  } = data;
  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content ">
        <div className="listing__image-container">
        <div className="listing__type">{category}</div>
          <img
            className="listing__image"
            alt="real estate mansion"
            src={require(`../../images/projects/ProjCardView/${id}.png`)}
          />
        </div>
        <div className="listing__details bg-dark  ">
          <div className="listing__row">
            <span className="listing__price text-white">{projectName}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{description}</span>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;

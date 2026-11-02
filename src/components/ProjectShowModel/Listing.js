import React from "react";
import "../../css/Listing.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const Listing = ({ data, open }) => {
  const {  
    projectName,
    category,
    cardDesc,
    id
  } = data;
  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content ">
        <div className="listing__image-container">
        <div className="listing__type">{category==="dev"?<FaLaptopCode size={25}/>:<FaPaintBrush size={25}/>}</div>
          <img
            className="listing__image"
            alt="real estate mansion"
            src={require(`../../images/projects/ProjCardView/${id}.png`)}
          />
        </div>
        <div className="listing__details surface  ">
          <div className="listing__row">
            <span className="listing__price theme-text">{projectName}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{cardDesc}</span>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;

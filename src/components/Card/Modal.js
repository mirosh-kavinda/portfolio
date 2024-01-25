import React from "react";
import "./Modal.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Modal = ({ data, close }) => {
  const {
    id,
    projectName,
    category,
    description,
    image
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal bg-dark "
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={require(`../../images/projects/ProjCardView/${id}.png`)}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info bg-dark" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{projectName}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">{category}</span>
        </motion.div>
       
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">{description}</p>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
       <Link
         to="/projects/projview"
         state={{
           projId: id,
           projName: projectName,
           projDir: image,
           projCat: category,
         }}
         className=" d-flex justify-content-center p-2 button nav-link"
         style={{
           border: " solid white",
           padding: "1px",
           textDecoration: "none",
           color: "white",
           borderRadius: "20%",
           cursor: "pointer",
         }}
>
       View
       </Link>
       
     </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

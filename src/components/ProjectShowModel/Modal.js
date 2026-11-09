import React from "react";
import "../../css/Modal.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { projectTitle } from "./Listing";
const Modal = ({ data, close }) => {
  const {
    id,
    projectName,
    category,
    description,
    image,
    projectLink
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
      className="modal surface "
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt={projectTitle(data)}
        src={require(`../../images/projects/ProjCardView/${id}.png`)}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info surface" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="pf-badge">
            {category === "dev" ? "Development" : "UX case study"}
          </span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{projectTitle(data)}</span>
        </motion.div>
       
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">{description}</p>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <div className="pf-actions mt-0">
            <Link
              to="/projects/projview"
              state={{
                projId: id,
                projName: projectName,
                projDir: image,
                projCat: category,
                projectLink: projectLink,
              }}
              className="pf-btn pf-btn-primary"
            >
              {category === "casestudy" ? "View case study" : "Read more"} <BsArrowRight />
            </Link>
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn"
              >
                {category === "dev" ? "GitHub" : "Figma"} <BsArrowUpRight />
              </a>
            )}
          </div>
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

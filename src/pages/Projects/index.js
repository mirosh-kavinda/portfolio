import { React } from "react";
import { ProjectData } from "../../data/pageData";
import Card from "../../components/ProjectShowModel/Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="d-flex justify-content-around row justify-center align-center  items-center mt-5 whitespace pb-5 mb-5">
        {ProjectData
        .map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

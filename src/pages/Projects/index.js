import { React } from "react";
import { ProjectData } from "../../data/Data";
import Card from "../../components/WorkDemo-Components/Card"
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.4 } }}
    exit={{ opacity: 0, transition: { duration: 0.4 } }}
  >
    <br />
    <br />
    <br />
    <br />
    <div className="d-flex justify-content-around row justify-center align-center items-center mt-3 mb-4"> 
    {ProjectData.map((data) => (
      <Card key={data.id} data={data} />
    ))}
    </div>
    <br />
    <br />
    <br />
    
  </motion.div>
  );
};

export default Projects;

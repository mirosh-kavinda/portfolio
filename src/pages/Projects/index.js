import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig.js";
import Card from "../../components/ProjectShowModel/Card";
import { motion } from "framer-motion";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await get(ref(db, "projects"));
        if (snapshot.exists()) {
          setProjectData(snapshot.val());
        } else {
          console.warn("No project data found in Firebase.");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="d-flex justify-content-around row justify-center align-center items-center mt-5 whitespace pb-5 mb-5">
        {projectData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

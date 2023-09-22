import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjCard = ({ projectName, projcat, id, image, projdesc }) => {
  const [expandIndex, setExpandIndex] = useState(false);

  const handleCardHover = (index) => {
    setExpandIndex(index === expandIndex ? -1 : index);
    delay(3000);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
      
    },
    collapsed: {
      width: "300px",
      
    },
  };
  return (
    <motion.div
      key={id}
      className={`  p-3    col-sm-12 col-md-4  cursor-pointer h-[500px] bg-cover bg-black bg-center rounded-[30px] ${
        id === expandIndex ? "expanded" : ""
      }`}
      variants={cardVariants}
      initial="collapsed"
      animate={id === expandIndex ? "expanded" : "collapsed"}
      transition={{ duration: 0.5 }}
      onHoverStart={() => handleCardHover(id)}
      onHoverEnd={() => handleCardHover(id)}
      onTouchStart={() => handleCardHover(id)}
      onTouchEnd={() => handleCardHover(id)}
    >
      <img
        alt="robots"
        className="card-img-top"
        src={require(`../../images/projects/ProjCardView/${id}.png`)}
        style={{ width: "cover", height: "250px" }}
      />

      <div className="card-content h-full flex flex-col justify-end">
        <div className="card-footer rounded-b-[20px bg-dark bg-opacity-75 min-h-[10px] flex flex-col items-center justify-center">
          <h6 className="text-xl font-semibold text-white text-center ">
            {projectName}
          </h6>
          <br />
          {id === expandIndex && (
            <>
              <p className="mt-2 text-gray-300 text-center ">{projdesc}</p>
            
              <hr />
              <Link
                to="/projects/projview"
                state={{
                  projId: id,
                  projName: projectName,
                  projDir: image,
                  projCat: projcat,
                }}
                className=" d-flex justify-content-center col-sm-6 col-md-4  link col-lg-4 "
                style={{
                  border: " solid white",
                  padding: "1px",
                  textDecoration: "none",
                  borderRadius:"10%",
                  color:"whitesmoke",
                  
                  cursor: "pointer",
                }}
              >
                View
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjCard;

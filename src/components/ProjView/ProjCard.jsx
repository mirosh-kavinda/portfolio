import React from "react";

import { Link } from "react-router-dom";

const ProjCard = ({ projectName, projcat, id, image, projdesc }) => {
  return (
    <div className="card bg-dark " width="15rem" data-aos="fade-up">
      <img
        alt="robots"
        className="card-img-top"
        src={require(`../../images/projects/ProjCardView/${id}.png`)}
        style={{ width: "cover", height: "250px" }}
      />

      <div className="card-body">
        <h5 className="card-title text-white  ">{projectName}</h5>
        <br />

        <p className="card-text text-white ">{projdesc}</p>
        <hr/>
        <Link

          to="/projects/projview"
          state={{
            projId: id,
            projName: projectName,
            projDir: image,
            projCat: projcat,
          }}
          className=" d-flex justify-content-center col-sm-6 col-md-4 col-lg-4 "
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
      </div>
    </div>
  );
};

export default ProjCard;

import React from "react";

import { Link } from "react-router-dom";

const ProjCard = ({ projectName, projcat, id, image }) => {
  return (
    <div className="card bg-dark " width="15rem">
      <img
        alt="robots"
        className="card-img-top"
        src={require(`../../images/projects/${id}.png`)}
        style={{ width: "cover", height: "250px" }}
      />

      <div className="card-body">
        <h5 className="card-title">{projectName}</h5>
        <p className="card-text">This is in {projcat}</p>
        <Link
          to="/projects/projview"
          state={{ projId: id, projName: projectName, projDir: image ,  projCat:projcat }}
          className=" d-flex justify-content-center col-sm-6 col-md-4 col-lg-4 mt-5"
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
        >
          View
        </Link>
      </div>
      
    </div>
  );
};

export default ProjCard;

import React from "react";

import { Link } from "react-router-dom";

const ProjCard = ({ projectName, category, id, image }) => {
  var image1;
  switch (id) {
    case "1":
      image1 = require("../../images/projects/image1.png");
      break;
    case "2":
      image1 = require("../../images/projects/image3.png");
      break;
    case "3":
      image1 = require("../../images/projects/image2.png");
      break;
    case "4":
      image1 = require("../../images/projects/image2.png");
      break;
    case "5":
      image1 = require("../../images/projects/image2.png");
      break;
    case "6":
      image1 = require("../../images/projects/image2.png");
      break;
    default:
      break;
  }

  return (
    <div className="card bg-dark " width="18rem">
      <img
        alt="robots"
        className="card-img-top"
        src={image1}
        style={{ width: "cover", height: "150px" }}
      />

      <div className="card-body">
        <h5 className="card-title">{projectName}</h5>
        <p className="card-text">{category}</p>
        <Link
          to="/projects/projview"
          state={{ projId: id, projName: projectName, projDir: image }}
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

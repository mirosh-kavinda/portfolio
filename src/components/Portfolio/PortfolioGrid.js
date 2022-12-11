import React from "react";
import "../../css/grid.scss";
import { Link } from "react-router-dom";

const portfolioGrid = () => {
  return (
    <div className="main-content ">
      <h1 className="  d-flex justify-content-center mb-5 ">Recent Works</h1>
      <div className="portfolio mt-3">
        <Link
          to="/projects/projview"
          state={{ projId: "1", projName: "Charity Application Design" }}
          className="img-hover-zoom portfolio-item medium one"
        >
          <h2>Charity Application</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{ projId: "3", projName: "Travel mate application Design" }}
          className="img-hover-zoom portfolio-item large two"
        >
          <h2>Travel mate application</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{ projId: "2", projName: "Fitness application Design" }}
          className="img-hover-zoom portfolio-item medium three"
        >
          <h2>Fitness application</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{ projId: " 4", projName: "Memphis Tutor Tutoring App" }}
          className="img-hover-zoom portfolio-item tall four wide"
        >
          <h2>MemphisTutor</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{ projId: "5", projName: " Crafira web site " }}
          className="img-hover-zoom portfolio-item tall five"
        >
          <h2>Crafira</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{ projId: "6", projName: "Med Map mobile application" }}
          className="img-hover-zoom portfolio-item wide six"
        >
          <h1>Med Map</h1>
        </Link>
      </div>
      <Link
        to="/projects"
        className="  d-flex justify-content-center  align-items-center btn bg-dark nav-link mt-1"
      >
        <h3>See more </h3>
      </Link>
    </div>
  );
};
export default portfolioGrid;

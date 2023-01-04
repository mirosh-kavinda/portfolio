import React from "react";
import "../../css/grid.scss";
import { Link } from "react-router-dom";

const portfolioGrid = () => {
  return (
    <div className="main-content ">
      <h1 className="  d-flex justify-content-center mb-5 ">Recent Works</h1>
      <div className="portfolio mt-3">
        <Link
          data-aos="fade-right"
          to="/projects/projview"
          state={{
            projId: "1",
            projName: "Charity Application Design",
            projCat: "casestudy",
          }}
          className="img-hover-zoom portfolio-item medium one"
        >
          <h2>CharityLife</h2>
          <br />
        </Link>
        <Link
          data-aos="fade-left"
          to="/projects/projview"
          state={{
            projId: "2",
            projName: "Travel mate application Design",
            projCat: "casestudy",
          }}
          className="img-hover-zoom portfolio-item large two"
        >
          <h2>TravelMate</h2>
        </Link>
        <Link
          data-aos="fade-right"
          to="/projects/projview"
          state={{
            projId: "3",
            projName: "Fitness application Design",
            projCat: "casestudy",
          }}
          className="img-hover-zoom portfolio-item medium three"
        >
          <h2>FitPro</h2>
        </Link>
        <Link
          data-aos="fade-left"
          to="/projects/projview"
          state={{
            projId: " 4",
            projName: "Memphis Tutor Tutoring App",
            projCat: "dev",
          }}
          className="img-hover-zoom portfolio-item tall four wide"
        >
          <h2>MemphisTutor</h2>
        </Link>
        <Link
          data-aos="fade-right"
          to="/projects/projview"
          state={{ projId: "5", projName: "MedMap", projCat: "dev" }}
          className="img-hover-zoom portfolio-item tall five"
        >
          <h2>Med Map</h2>
        </Link>
        <Link
          data-aos="fade-left"
          to="/projects/projview"
          state={{ projId: "6", projName: "Crafira", projCat: "dev" }}
          className="img-hover-zoom portfolio-item wide six"
        >
          <h2>Crafira</h2>
        </Link>
      </div>
      <Link
        data-aos="fade-down"
        to="/projects"
        className="  d-flex justify-content-center  align-items-center btn bg-dark nav-link mt-1"
      >
        <h3>See more </h3>
      </Link>
    </div>
  );
};
export default portfolioGrid;

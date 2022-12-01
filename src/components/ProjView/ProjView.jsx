import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const ProjView = () => {
  const location = useLocation();
  const { projId, projName } = location.state;
  const navigate = useNavigate();
  let images;

  switch (projId) {
    case "1":
      images = importAll(
        require.context("../../images/projects/1/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "2":
      images = importAll(
        require.context("../../images/projects/2/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "3":
      images = importAll(
        require.context("../../images/projects/3/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "4":
      images = importAll(
        require.context("../../images/projects/3/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "5":
      images = importAll(
        require.context("../../images/projects/3/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "6":
      images = importAll(
        require.context("../../images/projects/3/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;

    default:
      break;
  }

  return (
    <>
      <div className="container mt-5 pt-4 ">
        <a  href="#1"onClick={() => navigate(-1)} className=" nav-link mt-3">
          Back
        </a>

        <h1 className="d-flex justify-content-center mt-5 ">{projName}</h1>

        {images.map((image) => {
          return (
            <img
              key={Math.random()}
              className=" img-fluid  mb-1 "
              src={image}
              width="100%"
              alt="Responsive "
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjView;

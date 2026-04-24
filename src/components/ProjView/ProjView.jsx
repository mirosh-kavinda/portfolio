import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";


function importAll(r) {
  return r.keys().map(r);
}

const ProjView = () => {
  const location = useLocation();
  const { projId, projName, projCat,projectLink } = location.state;
  const navigate = useNavigate();
  let images;


  const [post, setPost] = useState("");
  useEffect(() => {
    const file_name = `${projName}/main/ReadMe.md`;
  
    // YOUR GITHUB RAW URL
    const githubURL = `https://raw.githubusercontent.com/mirosh-kavinda/${file_name}`;
  
    fetch(githubURL)
      .then((res) => res.text())
      .then((text) => setPost(text))
      .catch((err) => console.log("Error fetching MD:", err));
  }, [projName]);
  

  // image sorting to import all for casestudies
  switch (projId) {
    case "1":
      images = importAll(
        require.context("../../images/projects/1/", true, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "2":
      images = importAll(
        require.context("../../images/projects/3/", true, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "3":
      images = importAll(
        require.context("../../images/projects/2/", true, /\.(PNG|jpe?g|png)$/)
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div className="container mt-5 pt-4 ">
        <div className="d-flex align-items-center mt-4">
          <span
            onClick={() => navigate(-1)}
            className="nav-link  p-0 me-2"
            style={{
              color: "#fffff",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Projects
          </span>
          <span style={{ color: "#adb5bd" }}> / {projName}</span>
        </div>
       
        <div className=" mt-5 mb-5"> </div>
        {projCat === "casestudy" &&
          images.map((image) => {
            return (
              <img
                className=" img-fluid  mb-1 "
                src={image}
                width="100%"
                alt="Responsive "
              />
            );
          })}
{projCat === "casestudy" && (
  <div className="fab">
    <Link to={projectLink} className="btn btn-dark border solid 1px">
      View Design File
    </Link>
  </div>
)}

        {projCat === "dev" && <Markdown>{post}</Markdown>}
        {projCat === "blog1" && <Markdown>{post}</Markdown>}
      </div>
    </>
  );
};

export default ProjView;

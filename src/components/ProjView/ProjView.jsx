import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
// import './styles.css';
function importAll(r) {
  return r.keys().map(r);
}

const ProjView = () => {
  const location = useLocation();
  const { projId, projName, projCat } = location.state;
  const navigate = useNavigate();
  let images;

  const file_name = `${projName}.md`;
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`../../content/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  // image sorting to import all for casestudies
  switch (projId) {
    case "1":
      images = importAll(
        require.context("../../images/projects/1/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "2":
      images = importAll(
        require.context("../../images/projects/3/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    case "3":
      images = importAll(
        require.context("../../images/projects/2/", false, /\.(PNG|jpe?g|png)$/)
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div className="container mt-5 pt-4 " data-aos="fade-up">
        <div onClick={() => navigate(-1)} className=" nav-link mt-3">
          Back
        </div>

        <h1 className="d-flex justify-content-center mt-5 ">{projName}</h1>

        {projCat === "casestudy" &&
          images.map((image) => {
            return (
              <img
                data-aos="fade-up"
                key={Math.random()}
                className=" img-fluid  mb-1 "
                src={image}
                width="100%"
                alt="Responsive "
              />
            );
          })}
          
        {projCat === "dev" && (
         
    
            <Markdown>{post}</Markdown>
        
        )}
      </div>
    </>
  );
};

export default ProjView;

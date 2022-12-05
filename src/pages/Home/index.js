import React from "react";
import PortfolioGrid from "./PortfolioGrid";
import "../../css/mouse.scss";
import MatrixBackGround from "../../components/MatrixBackground";
import Aboutme from "./Aboutme";
import {
  AiOutlineBehance,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
class Home extends React.Component {
  render() {
    return (
      <>
        <MatrixBackGround />
        <div className="home row mt-5 m-5 p-5">
          <div className="col-sm-12 col-md-5 imageav">
            <img
              src={
                "https://avatars.githubusercontent.com/u/74175084?s=400&u=ad95ac6678bbdab94f754a427330a1f7f1ed516e&v=4"
              }
              alt="landing"
              className="rounded-circle img-fluid ms-4"
            />
          </div>

          <div className=" col-sm-12 col-md-6 ">
            <h1>Hi i’m Mirosh Kavnda </h1>
            <h4>Full stack Developer</h4>
            <p className="para">
              ( based in Sri lanka )
              <br />I Care Both UX and UI of your webpages
            </p>

            <div className=" bg-dark p-1 col-sm-12 col-md-9 d-flex justify-content-center">
              <a href="https://www.instagram.com/mirosh_kavinda/">
                <AiOutlineBehance className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg">
                <AiOutlineYoutube className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://www.twitter.com/mirosh_kavinda/">
                <AiOutlineTwitter className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                <AiOutlineLinkedin className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                <AiOutlineGithub className="mx-2 socialmedia" size={30} />
              </a>
            </div>

            <button
              to="/projects"
              className="  d-flex justify-content-center mt-4 align-items-center btn bg-dark nav-link p-2 col-sm-12 col-md-6"
            >
              Download CV
            </button>
            <div className="mouse"></div>
          </div>
        </div>
        <div className="proj  ">
          <PortfolioGrid />
        </div>
        <div className="aboutme">
          <Aboutme />
        </div>
      </>
    );
  }
}
export default Home;

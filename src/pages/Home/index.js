import React from "react";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import "../../css/mouse.scss";
import MatrixBackGround from "../../components/MatrixBackground";
import Aboutme from "../../components/Aboutme/Aboutme";
import fileSaver from "file-saver";
import { Link } from "react-router-dom";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import Badges from "../../components/Aboutme/Badges";

class Home extends React.Component {
  render() {
    const saveFile = () => {
      fileSaver.saveAs(
        "https://drive.google.com/uc?export=download&id=1g6ZF-jLVGU2czmd6SyGLByMZ07gy9uyN",
        "Mirosh_CV.pdf"
      );
    };

    return (
      <>
        <MatrixBackGround />

        <div className="home row mt-5  p-5">
          <div className="col-sm-12 col-md-5 " data-aos="fade-down">
            <img
              src={
                "https://avatars.githubusercontent.com/u/74175084?s=400&u=ad95ac6678bbdab94f754a427330a1f7f1ed516e&v=4"
              }
              alt="landing"
              className=" rounded-circle img-fluid ms- imageav"
            />
          </div>

          <div className="  col-sm-12 col-md-7 header " data-aos="fade-down">
            <h1 data-aos="fade-down">Hi i’m Mirosh Kavnda </h1>
            <p data-aos="fade-down">Full stack Developer</p>
            <p data-aos="fade-down" className="para">
              ( based in Sri lanka )
              <br />I Care Both UX and UI of your webpages
            </p>

            <div
              data-aos="fade-down"
              className=" mt-3 bg-dark p-1 col-sm-12 col-md-3 d-flex justify-content-center"
            >
              <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg">
                <AiOutlineYoutube className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://www.twitter.com/mirosh_kavinda/">
                <AiOutlineTwitter className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                <AiOutlineLinkedin className="mx-2 socialmedia" size={30} />
              </a>
              <a href="https://github.com/mirosh-kavinda">
                <AiOutlineGithub className="mx-2 socialmedia" size={30} />
              </a>
            </div>

            <button
              data-aos="fade-down"
              to="/projects"
              className="  d-flex justify-content-center mt-4 align-items-center btn download bg-dark nav-link p-2 col-sm-12 col-md-6"
              onClick={saveFile}
            >
              Download CV
            </button>
            <div className="mouse" id="mouse"></div>
          </div>
        </div>
        <div className="proj" c>
          <PortfolioGrid />
        </div>
        <br />
        <div className="aboutme  " data-aos="fade-down">
          <Aboutme />
          <div
            className="row  gap-1 flex justify-content-center  "
            data-aos="fade-down"
          >
            <Link
              to="/contact"
              className=" nav-link bg-dark col-sm-6 col-md-4  nav-link  btn   mt-2    "
            >
              <h5>Contact Me</h5>
            </Link>

            <Link
              to="/aboutme"
              className=" align-item-center nav-link bg-dark col-sm-6 col-md-4 d-flex justify-content-center nav-link  btn download  mt-2  "
            >
              <h5>More About me</h5>
            </Link>
          </div>
          <div data-aos="fade-down">
            <Badges />
          </div>
        </div>
      </>
    );
  }
}
export default Home;

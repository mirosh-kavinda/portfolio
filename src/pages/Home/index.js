import React from "react";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import "../../css/mouse.scss";
import Aboutme from "../../components/Aboutme/Aboutme";
import fileSaver from "file-saver";
import { Link } from "react-router-dom";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import ContactForm from "../Contact";
import Badges from "../../components/Aboutme/Badges";
import BriefType from "../../components/Aboutme/BriefType";

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
        <div className="home" id="home">
          <div className="header ">
            <div className="row ">
              <div
                className="col-md-7 white-text text-start ms-5 text-start"
                id="heading"
              >
                <p
                  data-aos="fade-down"
                  className="para font-weight-bold   "
                >
                  {" "}
                  Hello My name is
                </p>
                <p
                  data-aos="fade-down"
                  className="display-1 font-weight-bold     "
                >
                  Mirosh Kavinda
                </p>
                <h5 data-aos="fade-down" className="mb-3">
                  Full Stack Developer | Software Engineer
                </h5>
                <h6  data-aos="fade-down"className="col-9">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </h6>
              </div>
              <div  data-aos="fade-down"className=" col-sm-12 col-md-4  p-3" id="brief" >
                <BriefType />
              </div>
            </div>

            <div
              align="start"
              className="mt-5 ms-5"
              data-aos="fade-down"
              data-wow-delay="0.2s"
            >
              Follow me :
              <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg ">
                <AiOutlineYoutube
                  className="mx-2  bg-dark rounded link text-white "
                  size={40}
                />
              </a>
              <a href="https://www.twitter.com/mirosh_kavinda/">
                <AiOutlineTwitter
                  className="mx-2 bg-dark rounded link text-white "
                  size={40}
                />
              </a>
              <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                <AiOutlineLinkedin
                  className="mx-2 bg-dark rounded link text-white "
                  size={40}
                />
              </a>
              <a href="https://github.com/mirosh-kavinda">
                <AiOutlineGithub
                  className="mx-2 bg-dark rounded link text-white "
                  size={40}
                />
              </a>
              <button
                data-aos="fade-down"
                to="/projects"
                className="  d-flex justify-content-center mt-3 btn  link bg-dark text-white col-sm-4 col-md-2"
                onClick={saveFile}
              >
                Download CV
              </button>
              
              <div className="mouse" id="mouse"></div>
            </div>
            
          </div>
        </div>

        <div className="aboutme ">
           <Aboutme />

          <Link
            to="/aboutme"
            className=" align-item-center nav-link bg-dark col-sm-6 col-md-2 p-1 ms-3  nav-link  btn download  mt-2  "
          >
            <h5>More About me</h5>
          </Link>
          </div>

          <div className="badges">
            <Badges />
          </div>

          <div className="proj ">
            <PortfolioGrid />
          </div>
          <hr className=" mx-5" />

          <div>
            <ContactForm className="contactme" />
          </div>
    
      </>
    );
  }
}
export default Home;

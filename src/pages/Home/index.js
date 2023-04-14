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
          <div className="header">
            <div className="containerd-flex justify-content-center align-items-center context">
              <div className="col-md-12 white-text text-center "   id="heading">
                <p
           
                  data-aos="fade-down"
                  className="display-1 font-weight-bold mb-2  "
                >
                  Hi i’m Mirosh Kavinda
                </p>
                <p data-aos="fade-down" className="display-3">
                  Full stack Developer
                </p>
                <p data-aos="fade-down" className="para">
                  ( based in Sri lanka )
                  <br />I Care Both UX and UI of your webpages
                </p>
              </div>

              <div
                align="center"
                className="mt-5"
                data-aos="fade-down"
                data-wow-delay="0.2s"
              >
                <a className="bg-dark rounded py-3 mx-3  "href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg ">
                  <AiOutlineYoutube
                    className="mx-2 rounded  link "
                    size={50}
                  />
                </a>
                <a className="bg-dark rounded py-3 mx-3 "href="https://www.twitter.com/mirosh_kavinda/">
                  <AiOutlineTwitter
                    className="mx-2 rounded link "
                    size={50}
                  />
                </a>
                <a className="bg-dark rounded py-3 mx-3 "href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                  <AiOutlineLinkedin
                    className="mx-2 rounded link "
                    size={50}
                  />
                </a>
                <a className="bg-dark rounded py-3 mx-3 "href="https://github.com/mirosh-kavinda">
                  <AiOutlineGithub
                    className="mx-2 rounded link "
                    size={50}
                  />
                </a>

                <button
                  data-aos="fade-down"
                  to="/projects"
                  className="  d-flex justify-content-center mt-3 btn  link bg-dark col-sm-4 col-md-2"
                  onClick={saveFile}
                >
                  Download CV
                </button>
                <div className="mouse" id="mouse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="proj">
          <PortfolioGrid />
         
        </div>
        <hr className="my-4 mx-5" />
        <div className="aboutme  ">
          <Aboutme />

          <Link
            to="/aboutme"
            className=" align-item-center nav-link bg-dark col-sm-6 col-md-2 p-1 ms-3  nav-link  btn download  mt-2  "
          >
            <h5>More About me</h5>
          </Link>

          <div>
            <Badges />
          </div>
          <hr className="my-5" />
          <div>
            <ContactForm className="contactme" />
          </div>
        </div>
      </>
    );
  }
}
export default Home;

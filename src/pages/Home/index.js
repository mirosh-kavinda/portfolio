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
        <div id="home" class="home">
          <div class="mask rgba-black-strong header">
            <div class="containerd-flex justify-content-center align-items-center context">
              <div class="row smooth-scroll ">
                <div class="col-md-12 white-text text-center">
                  <div
                    class="wow fadeInDown mt-5"
                    data-wow-delay="0.2s jusify-center mt-5 "
                  >
                    <h1
                      data-aos="fade-down"
                      className="display-1 font-weight-bold mb-2 mt-5"
                    >
                      Hi i’m Mirosh Kavinda
                    </h1>
                    <h3 data-aos="fade-down" className="display-5">
                      Full stack Developer
                    </h3>
                    <h6 data-aos="fade-down" className="para">
                      ( based in Sri lanka )
                      <br />I Care Both UX and UI of your webpages
                    </h6>

                    <div align="center">
                      <div
                        data-aos="fade-down"
                        className="  bg-dark col-md-3 p-2 col-sm-6 mx-5 mt-4 rounded "
                      >
                        <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg ">
                          <AiOutlineYoutube
                            className="mx-2 socialmedia"
                            size={40}
                          />
                        </a>
                        <a href="https://www.twitter.com/mirosh_kavinda/">
                          <AiOutlineTwitter
                            className="mx-2 socialmedia"
                            size={40}
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                          <AiOutlineLinkedin
                            className="mx-2 socialmedia"
                            size={40}
                          />
                        </a>
                        <a href="https://github.com/mirosh-kavinda">
                          <AiOutlineGithub
                            className="mx-2 socialmedia"
                            size={40}
                          />
                        </a>
                      </div>

                      <button
                        data-aos="fade-down"
                        to="/projects"
                        className="  d-flex justify-content-center mt-3 align-items-center btn download bg-dark nav-link p-2 col-sm-9 col-md-2"
                        onClick={saveFile}
                      >
                        Download CV
                      </button>
                    </div>

                    <div className="mouse" id="mouse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="proj">
          <PortfolioGrid />
        </div>
        <br />
        <div className="aboutme  mx-4">
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
          <ContactForm className="contactme" />
        </div>
      </>
    );
  }
}
export default Home;

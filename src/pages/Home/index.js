import React from "react";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import "../../css/mouse.scss";
import Aboutme from "../../components/Aboutme/Aboutme";
import fileSaver from "file-saver";

import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  
} from "react-icons/ai";
import {
  BsMedium
  
} from "react-icons/bs";
import {
  MdOutlineWavingHand
  
} from "react-icons/md";
import ContactForm from "../../components/Contact";
import Badges from "../../components/Aboutme/Badges";
import BriefType from "../../components/Aboutme/BriefType";

class Home extends React.Component {
  render() {
    const saveFile = () => {
      fileSaver.saveAs(
        "https://drive.google.com/uc?export=download&id=1iIohv8Jwf2cGhf4yIcNphxz-1PQYe7f-",
        "Mirosh_kavinda_resume.pdf"
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
                <p data-aos="fade-down" className="para font-weight-bold   ">
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
                <h6 data-aos="fade-down" className="col-9">
                  I design and develop stylish, modern websites, web services for customers of all sizes. I have a proven
                  track record of success in creating user-friendly and engaging
                  websites .
                </h6>
              </div>
              <div
                data-aos="fade-down"
                className=" col-sm-12 col-md-4 p-3"
                id="brief"
              >
                <BriefType />
              </div>
            </div>

            <div
              align="start"
              className="mt-5 ms-5"
              data-aos="fade-down"
              data-wow-delay="0.2s"
            >   
            
             <a href="https://medium.com/@kavindahgm">
            <BsMedium
              className=" mx-2  bg-dark rounded link text-white "
              size={40}
            />
          </a>
          <a href="https://medium.com/@kavindahgm">
            <MdOutlineWavingHand
              className="mx-2   bg-dark rounded link text-white "
              size={40}
            />
          </a>
              
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

import React from "react";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import "../../css/mouse.scss";

import fileSaver from "file-saver";

import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import ContactForm from "../../components/Contact";
import Badges from "../../components/Affiliations/Affiliation";
import BriefType from "../../components/Aboutme-Components/BriefType";
import useAnimations from "../../hooks/useAnimations";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const { pageloading } = useAnimations();
  const saveFile = () => {
    fileSaver.saveAs(
      "https://drive.google.com/uc?export=download&id=13f8XpuT9hoJb-tbgE_4XJNXyd_OyeboO",
      "Mirosh_kavinda_resume.pdf"
    );
  };
  return (
    <>
      {pageloading ? (
        <div className="App">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className="home" id="home">
            <div className="header ">
              <div className="row ">
                <div
                  className="col-md-7 white-text text-start ms-5 text-start"
                  id="heading"
                >
                  <p className="para font-weight-bold   "> Hello My name is</p>
                  <p className="display-1 font-weight-bold     ">
                    Mirosh Kavinda
                  </p>
                  <h5 className="mb-3">
                    Full Stack Developer | Software Engineer
                  </h5>
                  <h6 className="col-9">
                    I design and develop stylish, modern websites, web services
                    for customers of all sizes. I have a proven track record of
                    success in creating user-friendly and engaging websites .
                  </h6>
                </div>
                <div className=" col-sm-12 col-md-4 p-3" id="brief">
                  <BriefType />
                </div>
              </div>

              <div align="start" className="mt-5 ms-5" data-wow-delay="0.2s">
                <a href="https://medium.com/@kavindahgm">
                  <BsMedium
                    className=" mx-2  bg-dark rounded link text-white "
                    size={40}
                  />
                </a>
                <a href="https://clubhouse.com/@miroshkavinda">
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
          <div className="proj ">
            <PortfolioGrid />
          </div>

          <div className="badges mt-5">
            <Badges />
          </div>

          <div className="mt-5">
            <ContactForm className="contactme" />
          </div>
        </div>
      )}
    </>
  );
};
export default Home;

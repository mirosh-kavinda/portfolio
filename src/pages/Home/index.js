import React from "react";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
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
import BriefType from "../../components/Aboutme-Components/BriefType";
import {motion} from 'framer-motion';
import Features from "../../components/Features/Features";

const Home = () => {
  const saveFile = () => {
    fileSaver.saveAs(
      "https://drive.google.com/uc?export=download&id=13f8XpuT9hoJb-tbgE_4XJNXyd_OyeboO",
      "Mirosh_kavinda_resume.pdf"
    );
  };
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.4}}} exit={{opacity:0, transition:{duration:0.4}}}>
      <div className="home" id="home">
        <div className="header ">
          <div className="row ">
            <div
              className="col-md-8 col-sm-12 white-text text-start ms-4 text-start"
              id="heading"
            >
              <p className="display-1 font-weight-bold">Mirosh Kavinda</p>

              <h4 className="col-md-7 col-sm-12">
                I design and develop stylish, modern websites, web services for
                customers of all sizes. I have a proven track record of success
                in creating user-friendly and engaging websites .
              </h4>
            </div>
          </div>

          <div align="start" className="mt-5 ">
            <a className="mx-1 ms-3" href="https://medium.com/@kavindahgm">
              <BsMedium className="  rounded  link bg-dark p-1 " size={40} />
            </a>
            <a className="mx-1" href="https://clubhouse.com/@miroshkavinda">
              <MdOutlineWavingHand
                className="rounded  link bg-dark p-1 "
                size={40}
              />
            </a>

            <a
              className="mx-1"
              href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg "
            >
              <AiOutlineYoutube
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            Feature
            <a className="mx-1" href="https://www.twitter.com/mirosh_kavinda/">
              <AiOutlineTwitter
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/mirosh-kavinda-988042159/"
            >
              <AiOutlineLinkedin
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            <a className="mx-1" href="https://github.com/mirosh-kavinda">
              <AiOutlineGithub
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            <div className="row mt-4">
              <button
                to="/projects"
                className="  link rounded bg-dark col-md-2 col-4 "
                onClick={saveFile}
              >
                Download CV
              </button>
            </div>
            <div className=" col-sm-12 col-md-5 ">
              <BriefType />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-5 mb-4">
        <Features />
      </div> */}
      
      <div className="proj">
        <h1 className="text-center mt-4 mb-4">Recent Projects</h1>
        <PortfolioGrid />
      </div>

      <div className="mt-5">
        <ContactForm className="contactme" />
      </div>
    </motion.div>
  );
};
export default Home;

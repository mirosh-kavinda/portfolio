import React from "react";
import fileSaver from "file-saver";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCloudDownload,
  AiOutlineBuild,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import BriefType from "../../components/AboutHelpers/BriefType";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LandingData } from "../../data/pageData";

const Home = () => {
  const navigate = useNavigate();
  const saveFile = () => {
    fileSaver.saveAs(LandingData.cvURl, LandingData.cvDownName);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="home" id="home">
        <div className="header  whitespace">
          <div className="row ">
            <div
              className="col-md-8 col-sm-12 white-text text-start ms-4 text-start"
              id="heading"
            >
              <p className="display-1 font-weight-bold"> {LandingData.name}</p>

              <h4 className=" col-md-7 col-sm-12 me-5 ">
                {LandingData.description}
              </h4>
            </div>
          </div>
          <div className="row whitespace ps-1 me-5 ms-1 ">
            <button
              to="/projects"
              className="  link rounded bg-dark col-md-2 mt-2 ms-2  col-s-2 "
              onClick={saveFile}
            >
              <AiOutlineCloudDownload /> {LandingData.cvbtn}
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="  link rounded bg-dark col-md-3 ms-2 mt-2 col-s-2"
            >
              {LandingData.workbtn} <AiOutlineBuild size={30} />
            </button>
          </div>
          <div align="start" className="mt-5  ps-1 me-5 ms-1  ">
            <a className="mx-1 ms-3" href={LandingData.mediumHandle}>
              <BsMedium className="  rounded  link bg-dark p-1 " size={40} />
            </a>

            <a className="mx-1" href={LandingData.ytHandle}>
              <AiOutlineYoutube
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            <a className="mx-1" href={LandingData.twitHandle}>
              <AiOutlineTwitter
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            <a className="mx-1" href={LandingData.linkdHandle}>
              <AiOutlineLinkedin
                className=" rounded  link bg-dark p-1 "
                size={40}
              />
            </a>
            <a className="mx-1" href={LandingData.githubHandle}>
              <AiOutlineGithub
                className=" rou nded  link bg-dark p-1 "
                size={40}
              />
            </a>
          </div>

          <div className=" col-sm-12 col-md-5  ps-1 me-5 ms-1  ">
            <BriefType />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;

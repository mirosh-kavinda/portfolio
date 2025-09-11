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
import { MdOutlineWavingHand } from "react-icons/md";
import BriefType from "../../components/Aboutme-Components/BriefType";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const saveFile = () => {
    fileSaver.saveAs(
      "https://drive.google.com/uc?export=download&id=1WOsmphSQQ2AlKPbeB_HmYtJCTxUV0-8q",
      "Mirosh_kavinda_resume.pdf"
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="home" id="home">
        <div className="header ">
          <div className="row ">
            <div
              className="col-md-8 col-sm-12 white-text text-start ms-4 text-start"
              id="heading"
            >
              <p className="display-1 font-weight-bold">Mirosh Kavinda</p>

              <h4 className=" col-md-7 col-sm-12 me-5">
                Designing and developing stylish, modern products and services
                for customers of all sizes. Possessing a proven track record of
                success in creating user-friendly and engaging digital
                presences.
              </h4>
            </div>
          </div>
          <div className="row mt-4 pt-3 ps-1 me-5 ms-1">
            <button
              to="/projects"
              className="  link rounded bg-dark col-md-2 mt-2 ms-2  col-s-2 "
              onClick={saveFile}
            >
              <AiOutlineCloudDownload /> Resume
            </button>
            <button
              onClick={() => navigate("/aboutme")}
              className="  link rounded bg-dark col-md-3 ms-2 mt-2 col-s-2"
            >
              See My Works <AiOutlineBuild size={30} />
            </button>
          </div>
          <div align="start" className="mt-5  ps-1 me-5 ms-1  ">
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

import React from "react";
import "../../css/footer.css";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineCopyright,
  AiOutlineGithub,
  AiOutlineCode,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { BsArrowUpSquare } from "react-icons/bs";
import useBackToTop from "../../hooks/useBackToTop";
import { useSiteData } from "../../context/SiteDataContext";

const Footer = () => {
  const { showButton, scrollToTop } = useBackToTop();
  const { siteData } = useSiteData();
  const landingData = siteData?.LandingData;

  return (
    <>
      <div>
        {showButton && (
          <div className="footer">
            <div className="row d-flex align-items-center mt-1">
              <div className="col-md-5 col-sm-4">
                <a href={landingData?.mediumHandle}>
                  <BsMedium
                    className="ms-4 mx-2 rounded link bg-dark"
                    size={30}
                  />
                </a>

                <a href={landingData?.ytHandle}>
                  <AiOutlineYoutube
                    className="mx-2 rounded link bg-dark"
                    size={30}
                  />
                </a>

                <a href={landingData?.twitHandle}>
                  <AiOutlineTwitter
                    className="mx-2 rounded link bg-dark"
                    size={30}
                  />
                </a>
                <a href={landingData?.linkdHandle}>
                  <AiOutlineLinkedin
                    className="mx-2 rounded link bg-dark"
                    size={30}
                  />
                </a>
                <a href={landingData?.githubHandle}>
                  <AiOutlineGithub
                    className="mx-2 rounded link bg-dark"
                    size={30}
                  />
                </a>
                <p
                  onClick={scrollToTop}
                  className="back-to-top nav-link col-md-1"
                >
                  <BsArrowUpSquare className="mx-2" size={35} />
                </p>
              </div>
              <p className="footer-head col-md-5 col-sm-3">
                <AiOutlineCopyright />
                2025 Alright reserved for @mirosh_kavinda{" "}
                <a href={landingData?.webCode} id="code_src">
                  {" "}
                  <AiOutlineCode className="mx-2 rounded link bg-dark" />
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import "./index.css";
import {
  AiOutlineBehance,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineCopyright,
} from "react-icons/ai";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    },
    [],
    []
  );

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      <div>
        {showButton && (
          <div className=" footer">
            <div className="row ">
              <div className=" mt-3 col-md-auto align-self-center mx-4">
                <a href="https://www.instagram.com/mirosh_kavinda/">
                  <AiOutlineBehance className="mx-2 socialmedia" size={30} />
                </a>
                <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg">
                  <AiOutlineYoutube className="mx-2 socialmedia" size={30} />
                </a>
                <a href="https://www.twitter.com/mirosh_kavinda/">
                  <AiOutlineTwitter className="mx-2 socialmedia" size={30} />
                </a>
                <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                  <AiOutlineLinkedin className="mx-2 socialmedia" size={30} />
                </a>
              </div>
              <p className="footer-head  nav-link ">
                <AiOutlineCopyright /> 2022 Alright reserved for @mirosh_kavinda
              </p>
            </div>
          </div>
        )}
        {showButton && (
          <p onClick={scrollToTop} className="  back-to-top col  ">
            Back to Top
          </p>
        )}
      </div>
    </>
  );
};

export default Footer;

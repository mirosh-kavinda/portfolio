import React, { useEffect, useState } from "react";
import "../../css/footer.css";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineCopyright,
} from "react-icons/ai";
import { BsArrowUpSquare } from "react-icons/bs";
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
            <div className="row d-flex align-items-center ">
              <div className=" mt-3   col-md-4 col-sm-4">
              
                <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg">
                  <AiOutlineYoutube className="mx-2 socialmedia" size={30} />
                </a>
                <a href="https://www.twitter.com/mirosh_kavinda/">
                  <AiOutlineTwitter className="mx-2 socialmedia" size={30} />
                </a>
                <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                  <AiOutlineLinkedin className="mx-2 socialmedia" size={30} />
                </a>
                <p
                  onClick={scrollToTop}
                  className="  back-to-top nav-link col-md-1 "
                >
                  <BsArrowUpSquare className="mx-2 socialmedia" size={40} />
                </p>
              </div>
              <p className=" nav-link  footer-head col-md-5 col-sm-2  ">
                <AiOutlineCopyright />
                2022 Alright reserved for @mirosh_kavinda
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import History from "../../components/AboutHelpers/History";
import { ImageData1 } from "../../data/imageData";
import Badges from "../../components/AboutHelpers/Affiliation";
import ContactForm from "../../components/Contact/contactForm";
import { useSiteData } from "../../context/SiteDataContext";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export default function AboutMe() {
  const { siteData, loading } = useSiteData();
  const aboutData = siteData?.AboutPageData;

  React.useEffect(() => {
    AddLibrary("https://platform.linkedin.com/badges/js/profile.js");
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <br />
      <br />
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="text col-sm-12 col-md-7">
            <h1 className="mt-3 p-3 text-start">{aboutData?.title}</h1>
            <p className="mt-4 mx-4">{aboutData?.subtitle1}</p>
            <p className="mt-3 mx-4">{aboutData?.subtitle2}</p>
          </div>
          <div className="p-3 text-center col-sm-12 col-md-4">
            <div
              className="ps-5 badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="mirosh-kavinda"
              data-version="v1"
            >
              <p className="badge-base__link LI-simple-link"></p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mx-2 vh-4">
        <br />
        <div className="badges mt-5">
          <Badges />
        </div>
        <br />
        <History />

        <h1 align="center" className="mt-5 pt-5 mb-4">
          {aboutData?.lowlvlsub}
          <hr />
          <span>
            <div>
              {ImageData1.map((image, index) => (
                <img
                  key={index}
                  className={image.className}
                  alt={image.alt}
                  src={image.src}
                  height={image.height}
                />
              ))}
            </div>
          </span>
        </h1>
        <hr />

        <div className="mt-5 pt-4 mb-4 pb-4">
          <ContactForm className="contactme" />
        </div>
      </div>
    </motion.div>
  );
}

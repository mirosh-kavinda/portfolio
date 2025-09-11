import { motion } from "framer-motion";
import History from "../../components/Aboutme-Components/History";
import { ImageData1 } from "../../data/imageData";
import Badges from "../../components/Aboutme-Components/Affiliation";
import ContactForm from "../../components/Contact/contactForm";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
export default function AboutMe() {
  //on page render this script should be loadde
  AddLibrary("https://platform.linkedin.com/badges/js/profile.js");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <br />
      <br />
      <div className="  container mt-5  mb-4">
        <div className="row">
          <div className="text col-sm-12 col-md-7">
            <h1 className="mt-3 p-3 text-start">Who Am I ?</h1>
            <p className="mt-4 mx-4">
              A Software Engineer passionate about user-centric, scalable
              applications. Google certified in UX, with strong full-stack
              development capabilities. Currently enhancing UI/UX and mobile app
              security at LB Finance (PVT) LTD, applying TDD and clean code.
              During an internship at LB Finance, contributed to an
              award-winning web application.
              <br />
              <br /> Graduated with a BSc. (Hons) in Software Engineering from
              Cinec Campus, achieving a 3.82 GPA and "Best academic
              achievement". Formerly VP of the TechStrike club and a campus
              field hockey team member.  A dedicated and proactive team player,
              driven to innovate and grow in fast-paced development.
            </p>
          </div>
          <div className=" p-3 text-center col-sm-12 col-md-4">
            <div
              class=" ps-5 badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="mirosh-kavinda"
              data-version="v1"
            >
              <p
                class="badge-base__link LI-simple-link"
                href="https://lk.linkedin.com/in/mirosh-kavinda?trk=profile-badge"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className=" mx-2 vh-4">
        <br />
        <div className="badges mt-5">
          <Badges />
        </div>
        <br />
        <History />

        <h1 align="center" className="mt-5  pt-5 mb-4">
          Tech Stack
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
       
        <div className="mt-5 pt-4 mb-4">
        <ContactForm className="contactme" />
      </div>
      </div>
      <br />
      <br />
      <br />
    </motion.div>
  );
}

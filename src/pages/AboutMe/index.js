import React from "react";
import image from "../../images/logo.jpg";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className=" mt-5 m-5 p-1" style={{ zIndex: -99999 }}>
          <h1 className="mt-5 d-flex justify-content-center">
            HI I'm Mirosh Kavinda 👋
          </h1>
          <h5 className="mt-3 d-flex justify-content-center">
            (A Frontend Developer 💻|Software Engineering Undergraduate)
          </h5>
          <div className="mt-5 p-4 row  d-flex justify-content-center ">
            <div className=" col-md-4 col-sm-12 ">
              <ul>
                <li>🌱 I’m currently learning flutter </li>
                <li>💬 Ask me about anything related to UX|UI design</li>
                <li> Focusing on #100DaysOfCode</li>
              </ul>
            </div>
            <div className=" col-md-4 col-sm-12">
              <img alt="this is logo" src={image} height={"220px"} />
            </div>
          </div>
          <div className=" mx-5 vh-4">
            <h3>
              Tech Stack :
              <hr />
              <span align="center">
                <img
                  alt="#1"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#3"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  height={"40px"}
                />
                <img
                  alt="#5"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  height={"40px"}
                />
                <img
                  alt="#6"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#7"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#8"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  height={"40px"}
                />
                <img
                  alt="#9"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#12"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#13"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  height={"40px"}
                />
                <img
                  alt="#14"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                  height={"40px"}
                />
              </span>
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;

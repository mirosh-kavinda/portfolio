
import image from "../../images/prof2.jpg";
import { AiOutlineGithub } from "react-icons/ai";

import History from "../../components/Aboutme/History";


export default function AboutMe() {

    return(<>
       <h1 className="mt-5 d-flex justify-content-center">
          Who Am I ?
        </h1>
  
        <div className="  row  d-flex justify-content-center ">
          <div className=" col-md-10 col-sm-12  ">
            <div className="row">
              <br />
              <div className="  mt-5  col-sm-12 col-md-8">
                
                <p className="mt-4">
                 Mirosh kavinda is a Software Engineering undergraduate at the
                  Cinec Campus . . He describes himself as outgoing, dedicated,
                  and open-minded. He is the vice president of Tech Strike Club
                  in Cinec Campus at the same time associate member of Rotaract
                  Club of cinec Campus. And also he is a member of UI/UX
                  community of Sri Lanka. He is interested in Web and Mobile
                  Applications Development, DevOps, Cloud Architecture . He gets
                  across to people and adjust to changes with ease and he loves
                  volunteering and helping other people through technology.
                </p>
              </div>
              <div className=" mt-5 p-4  container col-sm-12 col-md-3">
                <img
                  alt="this is logo"
                  src={image}
                  height={"260px"}
                  className="ms-5"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className=" mx-2 vh-4">
         
          <br />
          <br />
          <History />
          <h3 align="center">
            Tech Stack
            <hr />
            <span>
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
          <h3 className="mt-5 text-center">
            My Stats On Git hub
            <hr />
            <span>
              <div className="">
                <iframe
                  title="#"
                  src="https://github-readme-streak-stats.herokuapp.com?user=mirosh-kavinda&theme=dark&background=000000"
                  style={{ border: "0", overflow: "hidden" }}
                  allowfullscreen="true"
                  loading="lazy"
                  className=" col-md-6 col-sm-12 "
                ></iframe>
                <vr />
                <iframe
                  title="#"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=mirosh-kavinda&layout=compact&theme=vision-friendly-dark"
                  style={{ border: "0" }}
                  allowfullscreen="true"
                  loading="lazy"
                  className="col-md-6 col-sm-12 "
                ></iframe>
              </div>
            </span>
          </h3>
          <a
            href="https://github.com/mirosh-kavinda"
            className="  mt-4  btn download  bg-dark nav-link  col-sm-10 col-md-2 "
          >
            View More
            <span>
              <AiOutlineGithub className="mx-2 socialmedia" size={30} />
            </span>
          </a>
          <br />
          <br />
          <br />
        </div></>);
}
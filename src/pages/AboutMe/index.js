import image from "../../images/prof2.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import{motion} from 'framer-motion';
import History from "../../components/Aboutme-Components/History";


export default function AboutMe() {
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.4}}} exit={{opacity:0, transition:{duration:0.4}}}>
      <h1 className="mt-5 pt-5  text-center">Who Am I ?</h1>
      <div className="  row  d-flex justify-content-center ">
        <div className=" col-md-10 col-sm-12  ">
          <div className="row">
            <br />
            <div className="  mt-5 text col-sm-12 col-md-8">
              <p className="mt-4 mx-4">
                Mirosh kavinda is a Software Engineering undergraduate at the
                Cinec Campus . . He describes himself as outgoing, dedicated,
                and open-minded. He is the vice president of Tech Strike Club in
                Cinec Campus at the same time associate member of Rotaract Club
                of cinec Campus. And also he is a member of UI/UX community of
                Sri Lanka.
                <br />
                <br /> He is interested in Web and Mobile Applications
                Development, DevOps, Cloud Architecture . He gets across to
                people and adjust to changes with ease and he loves volunteering
                and helping other people through technology.
              </p>
            </div>
            <div className=" mt-5 p-4  container col-sm-12 col-md-3">
              <img
                className="m-1"
                alt="this is logo"
                src={image}
                height={"260px"}
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
        <h1 align="center" className="mt-5  pt-5 mb-4">
          Tech Stack
          <hr />
          <span>
            <img
              className="m-1"
              alt="#1"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#3"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#4"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#7"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#9"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#10"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#11"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#12"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#13"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              height={"40px"}
            />
            <img
              className="m-1"
              alt="#14"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              height={"40px"}
            />
            <p>
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg"
                alt="photoshop"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg"
                alt="illustrator"
                width="40"
                height="40"
              />

              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg"
                alt="canva"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gimp/gimp-original.svg"
                alt="gimp"
                width="40"
                height="40"
              />

              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original-wordmark.svg"
                alt="unity"
                width="40"
                height="40"
              />
            </p>

            <p>
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
                alt="android"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg"
                alt="androidstudio"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg"
                alt="windows8"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain-wordmark.svg"
                alt="ubuntu"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="linux"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original-wordmark.svg"
                alt="arduino"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg"
                alt="raspberrypi"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                alt="chrome"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firefox/firefox-original.svg"
                alt="firefox"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/opera/opera-original.svg"
                alt="opera"
                width="40"
                height="40"
              />
            </p>

            <p>
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
                alt="azure"
                width="40"
                height="40"
              />

              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                alt="bootstrap"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                alt="docker"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
                alt="firebase"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
                alt="flutter"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                alt="git"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                alt="github"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg"
                alt="gitlab"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg"
                alt="google"
                width="40"
                height="40"
              />
              <img
                className="m-1"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg"
                alt="googlecloud"
                width="40"
                height="40"
              />
            </p>
            <br />
          </span>
        </h1>
        <div className="row mt-5 pt-5" align="center">
          <h1 className="text-center col-md-10 col-sm-5">
            My Stats On Git hub
          </h1>
          <a
            href="https://github.com/mirosh-kavinda"
            className="   download   nav-link  col-sm-7 col-md-2 "
          >
            View More
            <span>
              <AiOutlineGithub className="mx-2 socialmedia" size={30} />
            </span>
          </a>
        </div>

        <div className="row mt-5 ">
          <iframe
            className="col-md-4 mt-3 col-sm-12 streaks "
            title="Mirosh's Streaks"
            height={"200px"}
            src="https://streak-stats.demolab.com/?user=mirosh-kavinda&theme=vision-friendly-dark"
            frameBorder="0"
          ></iframe>
          <iframe
            className="col-md-4 mt-3 col-sm-12 streaks "
            title="Mirosh's Streaks"
            height={"200px"}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mirosh-kavinda&layout=compact&theme=vision-friendly-dark"
            frameBorder="0"
          ></iframe>

          <iframe
            className="stats col-md-4 mt-3 col-sm-12"
            title="Mirosh's Stats"
            height={"200px"}
            src="https://github-readme-stats.vercel.app/api?username=mirosh-kavinda&show_icons=true&count_private=true&theme=vision-friendly-dark"
            frameBorder="0"
          ></iframe>

          <iframe
            className="col-md-12 col-sm-12 graph mt-4"
            height={"300px"}
            title="Mirosh's Activity Graph"
            src="https://github-readme-activity-graph.vercel.app/graph?username=mirosh-kavinda&theme=xcode"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />
    </motion.div>
  );
}

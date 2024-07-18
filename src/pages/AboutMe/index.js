
import { AiOutlineGithub } from "react-icons/ai";
import{motion} from 'framer-motion';
import History from "../../components/Aboutme-Components/History";
import { ImageData1 } from "../../data/imageData";
import Badges from "../../components/Affiliations/Affiliation";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
export default function AboutMe() {
  //add linkedin badge script to the page 
   
   //on page render this script should be loadde
  AddLibrary(
    "https://platform.linkedin.com/badges/js/profile.js"
  )

  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.4}}} exit={{opacity:0, transition:{duration:0.4}}}>
      <br />
      <br />
      <div className="  container mt-5  ">
          <div className="row">
            <div className="text col-sm-12 col-md-7">
            <h1 className="mt-3 p-3 text-start">Who Am I ?</h1>
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
            <div className=" p-3 text-center col-sm-12 col-md-4">
                <div class=" ps-5 badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="mirosh-kavinda" data-version="v1"><p class="badge-base__link LI-simple-link" href="https://lk.linkedin.com/in/mirosh-kavinda?trk=profile-badge"></p></div>
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

          {/* <iframe
            className="col-md-12 col-sm-12 graph mt-4"
            height={"300px"}
            title="Mirosh's Activity Graph"
            src="https://github-readme-activity-graph.vercel.app/graph?username=mirosh-kavinda&theme=xcode"
            frameBorder="0"
          ></iframe> */}
        </div>
      </div>
      <br />
      <br />
      <br />
    </motion.div>
  );
}

import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <>
      <div className=" bg-dark mt-5 p-4 container col-12">
        <h1>Who Am I ? </h1>
        <p className="mt-4">
          Mirosh kavinda is a Software Engineering undergraduate at the Cinec
          Campus . . He describes himself as outgoing, dedicated, and
          open-minded. He is the vice president of Tech Strike Club in Cinec
          Campus at the same time associate member of Rotaract Club of cinec
          Campus. And also he is a member of UI/UX community of Sri Lanka. He is
          interested in Web and Mobile Applications Development, DevOps, Cloud
          Architecture . He gets across to people and adjust to changes with
          ease and he loves volunteering and helping other people through
          technology.
        </p>

        <div className="row gap-5 mt-4">
          <Link
            to="/contact"
            className=" nav-link bg-dark col-sm-12 col-md-6  d-flex justify-content-center"
          >
            <h5>Contact Me</h5>
          </Link>

          <Link
            to="/aboutme"
            className=" align-item-center nav-link bg-dark col-sm-6 col-md-4 d-flex justify-content-center"
          >
            <h5>More About me</h5>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 d-flex justify-content-center mt-5 ">
        <h3>
          Badges That I earned :
          <hr />
          <span>
            <img
              alt="badgeimg1"
              src={require("../../images/badges/1.png")}
              className="m-3"
              width="150"
              height="150"
            />
            <img
              alt="badgeimg1"
              src={require("../../images/badges/2.png")}
              width="150"
              height="150"
              className="m-3"
            />
            <img
              alt="badgeimg1"
              src={require("../../images/badges/3.png")}
              width="150"
              height="150"
              className="m-3"
            />
          </span>
        </h3>
      </div>
    </>
  );
};

export default Aboutme;

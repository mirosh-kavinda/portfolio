import image from "../../images/prof.jpg";
const Aboutme = () => {
  return (
    <div div className="row">
      <br />
      <div className=" bg-dark mt-5 p-4 col-sm-12 col-md-8">
        <h1 className="ms-5  ">Who Am I ? </h1>
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
      </div>
      <div className=" mt-5 p-4  container col-sm-12 col-md-3">
        <img alt="this is logo" src={image} height={"260px"} className="ms-5" />
      </div>
    </div>
  );
};

export default Aboutme;

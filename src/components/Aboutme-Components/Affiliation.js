import "../../css/Affiliation.css";
const Affiliation = () => {
  return (
    <>
      <hr />
      <span className="d-flex mt-5 justify-content-center flex-wrap">
        <img
          alt="badgeimg1"
          src={require("../../images/badges/1.png")}
          className="mx-4 badgeimg img-fluid"
        />
        <img
          alt="badgeimg2"
          src={require("../../images/badges/2.png")}
          className="m-1 badgeimg img-fluid"
        />
        <img
          alt="badgeimg3"
          src={require("../../images/badges/3.png")}
          className="mx-4 badgeimg img-fluid"
        />
        <img
          alt="badgeimg4"
          src={require("../../images/badges/4.png")}
          className="mx-4 badgeimg img-fluid"
        />
        <img
          alt="badgeimg5"
          src={require("../../images/badges/5.png")}
          className="mx-4 badgeimg img-fluid"
        />
      </span>
      <hr />
      <br />
      <br />
      <br />
    </>
  );
};

export default Affiliation;

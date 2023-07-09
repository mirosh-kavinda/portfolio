
const Badges = () => {
  return (
    <>
      <div className="flex gap-5\ d-flex justify-content-center ">
        <h3 >
          Badges That I earned :
          <hr />
          <span className="">
            <img
              alt="badgeimg1"
              
              src={require("../../images/badges/1.png")}
              className="m-1 badgeimg "
              
            />
            <img
              alt="badgeimg1"
              src={require("../../images/badges/2.png")}
            
              className="m-1  badgeimg"
            />
            <img
              alt="badgeimg1"
              src={require("../../images/badges/3.png")}
          
              className="m-1 badgeimg"
            />
            <img
              alt="badgeimg1"
              src={require("../../images/badges/4.png")}
          
              className="m-1 badgeimg"
            />
          </span>
        </h3>
        
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Badges;

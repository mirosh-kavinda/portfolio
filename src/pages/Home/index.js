import React from "react";
import PortfolioGrid from "./PortfolioGrid";
import "../../css/mouse.scss";
import MatrixBackGround from "../../components/MatrixBackground";
import Aboutme from "./Aboutme";
class Home extends React.Component {
  render() {
    return (
      <>
        <MatrixBackGround />
        <div className="home ">
          <div className="header mt-5 mx-5">
            <h1>Hi i’m Mirosh Kavnda </h1>
            <h4>Full stack Developer</h4>
            <p className="para">
              ( based in Sri lanka )
              <br />I Care Both UX and UI of your webpages
            </p>
     
          </div>
          <div className="mouse"></div>

          <div className="proj ">
            <PortfolioGrid />
          </div>
          <div className="aboutme">
            <Aboutme />
          </div>
        </div>
      </>
    );
  }
}

export default Home;

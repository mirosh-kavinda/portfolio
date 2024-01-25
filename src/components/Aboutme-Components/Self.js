import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/prof.jpg";
import "../../css/responsive.css";
import { BioData} from "../../data/Data";
const Self = () => {
  return (
    <div className="row">
      <div className="mt-5 col-md-8">
        <p>{BioData[0]?.description}</p>
        <table className=" mt-4">
          <tbody>
            <tr className="mt-3">
              <td className="px-2">
                {" "}
                <strong>Name</strong>: {BioData[0].name}
              </td>
              <td className="px-2">
                <strong>Birthday</strong>: {BioData[0].birth}
              </td>
            </tr>
            <tr className="mt-4">
              <td className="px-2">
                <strong>Age: </strong> {BioData[0].age}
              </td>
              <td className="px-2">
                <strong>Address:</strong> {BioData[0].address}
              </td>
            </tr>
            <tr className="mt-3">
              <td className="px-2">
                <strong>Campus :</strong> {BioData[0].campus}
              </td>
              <td className="px-2">
                <strong>Email:</strong> {BioData[0].email}
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          to="/aboutme"
          className=" align-item-center nav-link bg-dark col-sm-6 link  btn download  mt-4  "
        >
          <h5>More About me</h5>
        </Link>
      </div>
      <p className=" col-md-4 about-img flex-d  " align="center">
        <img
          alt="this is logo"
          src={image}
          height="350px"
          id="about-img"
          className="mt-4 flex-d  "
        />
      </p>
    </div>
  );
};

export default Self;

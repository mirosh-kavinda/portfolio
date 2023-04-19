import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/prof.jpg";

const Aboutme = () => {
  return (
    <div className="row">
 
<div className="col-md-7">
<p className="mt-4">
                  <strong>Mirosh kavinda </strong>is a Software Engineering undergraduate at the
                  Cinec Campus . . He describes himself as outgoing, dedicated,
                  and open-minded. <br/>He is the vice president of Tech Strike Club
                  in Cinec Campus at the same time associate member of Rotaract
                  Club of cinec Campus.
                  
                </p>
<table className="">
        <tr className="mt-3">
          <td className="px-2"> <strong>Name</strong>: Mirosh Kavinda</td>
          <td className="px-2"><strong>Birthday</strong>: 29th April</td>
        </tr>
        <tr className="mt-4">
          <td className="px-2"><strong>Age: </strong> 24 y/o</td>
          <td className="px-2"><strong>Address:</strong> Matara, Sri Lanka</td>
        </tr>
        <tr className="mt-3">
          <td className="px-2"><strong>Campus :</strong> Cinec Campus, Malabe.</td>
          <td className="px-2"><strong>Email:</strong>  kavindahgm@gmail.com</td>
        </tr>
     
      </table>
</div>
    
      <div className=" image-fluid col-sm-12 col-md-3  " align="center">
        <img alt="this is logo" src={image} height={"260px"} className="mt-4" />
      </div>
      <Link
            to="/aboutme"
            className=" align-item-center nav-link bg-dark col-sm-6 link  btn download  mt-2  "
          >
            <h5>More About me</h5>
          </Link>
    </div>
  );
};

export default Aboutme;

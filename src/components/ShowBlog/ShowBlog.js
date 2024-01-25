import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function ToText(node) {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
}
function ShowBlog(props, p) {
  const [expandIndex, setExpandIndex] = useState(false);
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  const handleCardHover = (index) => {
    if (!isMobile) {
      setExpandIndex(index === expandIndex ? -1 : index);
      delay(3000);
    }else{
      setExpandIndex(true);
    }
  };

  const cardVariants = {
    expanded: {
      width: "cover",
      height:'50vh'
    },
    collapsed: {
      width: "50%",
      height:"40vh"
    },
    hide:{
    
    }
  };
  return (
    <motion.div
      key={props.index}
      className={` p-1 card card-s-bg  cursor-pointer col-sm-12 col-md-4 h-[500px] bg-cover bg-black bg-center rounded-[30px] ${
        props.index === expandIndex ? "expanded" : ""
      }`}
      variants={cardVariants}
      initial="collapsed"
      animate={props.index === expandIndex ? "expanded" : "collapsed"}
      transition={{ duration: 0.5 }}
      onHoverStart={() => handleCardHover(props.index)}
    >
      <img src={props.thumbnail} class="cardpost__image" alt="..." />

      <div className="border-success card-content h-full flex flex-col justify-end">
        <div className="card-footer rounded-b-[20px bg-dark bg-opacity-75 min-h-[10px] flex flex-col items-center justify-center">
          <h6 className="text-xl font-semibold text-orange text-center ">
            {props.title}
          </h6>
          <br />
          {(props.index === expandIndex ||isMobile) && (
            <>
              <p className="card-text text-center  pb-3 ">{`${ToText(
                props.description.substring(0, 500)
              )}...`}</p>

              <div
                class="card-footer bg-dark"
                style={{
                  border: "1px solid white",

                  borderRadius: "1%",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <Link
                  to={props.link}
                  className=" d-flex justify-content-center nav-link"
                >
                  Read More
                </Link>

                <span className=" ms-3 text-white  d-flex justify-content-center p-1">
                  published :{" "}
                  {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default withRouter(ShowBlog);

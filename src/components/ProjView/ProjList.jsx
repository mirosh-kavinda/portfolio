import React from "react";
import ProjCard from "./ProjCard";

const CardList = ({ projects, projcat }) => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-around row justify-center align-center items-center  ">
        {projects.map((user, i) => {
          return (
            <>
              {projcat === projects[i].category ? (
                <ProjCard
                  projcat={projects[i].category}
                  projectName={projects[i].projectName}
                  id={projects[i].id}
                  image={projects[i].image}
                  projdesc={projects[i].description}
                />
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default CardList;

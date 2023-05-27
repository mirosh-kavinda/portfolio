import React from "react";

import ProjCard from "./ProjCard";

const CardList = ({ projects, projcat }) => {
  return (
    <div className="container "  >
      <div className="row justity-content-center ">
        {projects.map((user, i) => {
          return (
            <div className="md-auto  col-sm-12 col-md-4"
              
            
            >
              {projcat === projects[i].category ? (
                <div className="md-auto  "
                key={Math.random()}>
             
                <ProjCard
                  projcat={projects[i].category}
                  projectName={projects[i].projectName}
                  id={projects[i].id}
                  image={projects[i].image}
                  projdesc={projects[i].description}
                />
                <br />
                </div>
              ) : (
               ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardList;

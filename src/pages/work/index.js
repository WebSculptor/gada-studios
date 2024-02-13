import { ProjectComponent } from "components";
import "./work.scss";
import React from "react";

export const WorkPage = () => {
  React.useEffect(() => {
    document.title = "GADA Studios - Our Works";
  }, []);

  return (
    <main>
      <div className="work">
        <div className="work__container">
          <h1 className="large__title">
            Our <span>Works</span>
          </h1>
          <div className="small__text">
            The projects we work on ranges from identity design, brand stragy
            and full on product design and development. We help brands achieve
            their goals and vision through design, storytelling, and strategy
            development. We find the visions hidden in words and help connect
            the dots
          </div>
          <h2>Selected Projects</h2>
        </div>
      </div>
      <ProjectComponent />
    </main>
  );
};

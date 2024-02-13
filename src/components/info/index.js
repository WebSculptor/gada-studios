import React from "react";
import "./info.scss";

export const InfoComponent = ({
  projectName,
  client,
  type,
  singleAbout,
  singleGoal,
  about,
  goals,
}) => {
  return (
    <div className="details__info">
      <div className="details__content">
        <h1>{projectName}</h1>
        <div className="details__description">
          <div className="top__description">
            {client && (
              <div>
                <h3>Client</h3>
                <div className="small__text">{client}</div>
              </div>
            )}
            {type && (
              <div>
                <h3>Project Type</h3>
                <div className="small__text">{type}</div>
              </div>
            )}
          </div>
          <div className="bottom__description">
            {about && (
              <div>
                <h3>About the Brand</h3>
                {singleAbout}
              </div>
            )}
            {goals && (
              <div>
                <h3>Brand Identity Goals</h3>
                {singleGoal}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

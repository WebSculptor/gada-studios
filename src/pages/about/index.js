import { offers } from "constants";
import "./about.scss";
import { TeamComponent } from "components";
import React from "react";

export const AboutPage = () => {
  React.useEffect(() => {
    document.title = "GADA Studios - About Us";
  }, []);

  return (
    <main>
      <div className="about">
        <div className="about__content">
          <div className="content">
            <h1 className="large__title">
              About <span>Us</span>
            </h1>
            <div className="other__content">
              <div className="min__width">
                <div className="small__text">
                  GADA Studios is your go-to agency for brand and product design, committed to creating impactful and effective brands. Our main goal is to bridge the gap between your business model and the specific needs of your users.
                </div>
                <div className="small__text">
                  Our approach revolves around your target audience, understanding their preferences, and strategically shaping how you want your brand to be perceived. We blend this user-centric focus with a keen awareness of the essential requirements of the brand and its stakeholders.
                </div>
              </div>
            </div>
            <div className="other__content second__content">
              <h2 className="small__title">Our Purpose</h2>
              <div className="min__width">
                <div className="small__text">
                  We follow a design thinking methodology that kicks off with insightful interview sessions during the discovery phase. Following this, we dive into comprehensive research, document our findings, and devise a strategic plan for the project. This process is a collaborative effort with our clients, ensuring their active participation at every step.
                </div>
                <div className="small__text">
                  Once a strategy is in place, we generate innovative ideas and refine them through iterative processes until we have a solution everyone agrees on. We then move on to creating prototypes and conduct user testing to assess the solution's performance with end-users and its alignment with the brand's mission and objectives.
                </div>
                <div className="small__text">
                  In the final stages of the project, we meticulously prepare files for launch and facilitate a smooth handover. We provide a brand guideline designed for clarity and easy comprehension.
                </div>
              </div>
            </div>
            <div className="other__content">
              <h2 className="small__title">What We Offer</h2>
              <div className="min__width">
                <div className="offers__container">
                  {offers.map((item, id) => (
                    <div key={id} className="offer">
                      <h3>{item.title}</h3>
                      {item.list.map((list, id) => (
                        <div className="small__text" key={id}>
                          {list}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* //! Team */}
          <TeamComponent />
        </div>
      </div>
    </main>
  );
};

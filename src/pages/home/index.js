import { ProjectComponent } from "components";
import "./home.scss";
import React from "react";

export const HomePage = () => {
  React.useEffect(() => {
    document.title = "GADA Studios";
  }, []);

  return (
    <main>
      <div className="home__container">
        <div className="home__content">
          <h1 className="large__title">
            <span>Brand</span> & <span>Product</span>
          </h1>
          <div className="home__content-bottom">
            <h1 className="large__title">Design Agency</h1>
            <div className="small__text">
              We build identities and products that elevate your brand to its natural Zenith and ultimately we strive to be the bridge that connects the dots between your business and your customers through effective branding, design and marketing.
            </div>
          </div>
        </div>
      </div>
      <ProjectComponent />
    </main>
  );
};

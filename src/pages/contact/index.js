import React from "react";
import "./contact.scss";

export const ContactPage = () => {
  React.useEffect(() => {
    document.title = "GADA Studios - Contact Us";
  }, []);

  return (
    <main>
      <div className="contact">
        <div className="contact__container">
          <h1 className="large__title">
            Contact <span>Us</span>
          </h1>
          <div className="contact__info">
            <div>
              <p>
                We are available for consulations and we are delighted to go on
                this journey with you.
              </p>
              <p>
                Send us an email at{" "}
                <a
                  href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Agadastudios240%40gmail.comom"
                  target="_blank"
                  rel="noreferrer"
                >
                  gadastudios240@gmail.com
                </a>{" "}
                or call
                <span>+234 706 464 2407</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

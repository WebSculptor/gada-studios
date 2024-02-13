import { Link } from "react-router-dom";
import "./footer.scss";
import { ABOUT, CONTACT, ROOT } from "routes";
import footerLogo from "assets/logos/footer-logo.svg";
import React from "react";

export const FooterComponent = () => {
  const [br, setBr] = React.useState(true);

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 590px)");
    if (media.matches) {
      setBr(false);
    }
    const listener = () => setBr(media);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [br]);

  return (
    <footer className="flex col">
      <div className="footer__container">
        <div className="footer__content flex justify-between">
          <div className="footer__content-left">
            <Link className="logo" to={ROOT}>
              <img src={footerLogo} alt="GADA Studios" />
            </Link>
          </div>
          <div className="footer__content-right flex col">
            <div className="content__right-top flex justify-between">
              <div className="contact__info">
                <Link to={CONTACT} className="email">
                  gadastudios240@gmail.com
                </Link>
                <p>+234 706 464 2407</p>
              </div>
              <Link
                to={CONTACT}
                className="contact__button flex items-center justify-center relative"
              >
                <p>Get in touch with us</p>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                      fill="var(--white)"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <Link to={ABOUT} className="content__right-bottom small__text">
              We build identities and products for ambitious brands. We are the
              {br && <br />} bridge that connects the dots between your business
              model and the users’ needs...<span>view about us</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="big__logo flex justify-end relative">
        <h1>GADA Studios</h1>
      </div>
    </footer>
  );
};

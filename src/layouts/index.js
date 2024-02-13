import React from "react";
import { HeaderComponent, FooterComponent } from "components";
import { Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowMenu(false);
    });
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <HeaderComponent showMenu={showMenu} setShowMenu={setShowMenu} />
      <Outlet />
      <FooterComponent />
    </>
  );
};

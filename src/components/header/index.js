import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { ROOT, ABOUT, CONTACT, WORK } from "routes";
import React from "react";
import { projects } from "constants";
import headerLogo from "assets/logos/header-logo.svg";
import { slugFunction } from "utils";

export const HeaderComponent = ({ showMenu, setShowMenu }) => {
  const navLinks = [
    {
      path: WORK,
      name: "Work",
    },
    {
      path: ABOUT,
      name: "About Us",
    },
    {
      path: CONTACT,
      name: "Contact",
    },
  ];

  return (
    <header className="sticky">
      <section className="desktop_nav items-center justify-between">
        <Link
          to={ROOT}
          onClick={() => setShowMenu(false)}
          className="logo"
          title="GADA Studios"
        >
          <img src={headerLogo} alt="GADA Studios" />
        </Link>
        <nav className="flex items-center">
          {navLinks.map((link, _key) => (
            <NavLink
              to={link.path}
              key={_key}
              title={link.name}
              className={({ isActive }) =>
                `link relative small__text ${isActive && "active_link"}`
              }
              children={() => link.name}
            />
          ))}
        </nav>
      </section>
      <section className="mobile_nav items-center justify-between">
        <Link
          to={ROOT}
          onClick={() => setShowMenu(false)}
          className="logo"
          title="GADA Studios"
        >
          <img src={headerLogo} alt="GADA Studios" />
        </Link>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2.53335 19.3333L0.666687 17.4666L8.13335 9.99996L0.666687 2.53329L2.53335 0.666626L10 8.13329L17.4667 0.666626L19.3334 2.53329L11.8667 9.99996L19.3334 17.4666L17.4667 19.3333L10 11.8666L2.53335 19.3333Z"
                fill="var(--black)"
              />
            </svg>
          ) : (
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path
                d="M0 16V13.3333H24V16H0ZM0 9.33333V6.66667H24V9.33333H0ZM0 2.66667V0H24V2.66667H0Z"
                fill="var(--black)"
              />
            </svg>
          )}
        </div>

        <div
          className={`mobile_menu flex col fixed ${
            showMenu && "mobile_menu-active"
          }`}
        >
          <div className="mobile_menu-links flex col">
            {navLinks.map((item, id) => (
              <NavLink
                key={id}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "menu_link menu_link-active" : "menu_link"
                }
                onClick={() => setShowMenu(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="menu_divider" />
          <div className="selected_projects">
            <h1>Selected Projects</h1>
            <ul>
              {projects.map((project, id) => (
                <NavLink
                  key={id}
                  to={`${WORK}/${slugFunction(project.projectName)}`}
                  className="project_link small__text"
                  onClick={() => setShowMenu(false)}
                >
                  {project.projectName}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

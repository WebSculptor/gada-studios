import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./pagination.scss";
import { WORK } from "routes";
import { slugFunction } from "utils";

export const PaginationComponent = ({ projects, itemsPerPage }) => {
  const location = useLocation();

  // Get the current page from local storage or use 1 as the default
  const currentPageLocalStorage = localStorage.getItem("currentPage");
  const [currentPage, setCurrentPage] = React.useState(
    currentPageLocalStorage ? parseInt(currentPageLocalStorage) : 1
  );

  // Clear local storage when navigating back to the project list page
  useEffect(() => {
    if (location.pathname === `/${WORK}`) {
      localStorage.removeItem("currentPage");
      setCurrentPage(1); // Reset currentPage to 1
    }
  }, [location.pathname]);

  // Store the current page in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const totalPages = Math.ceil(projects?.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Store the current page in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const prevItemName =
    startIndex > 0 ? projects[startIndex - 1]?.projectName : null;
  const nextItemName =
    endIndex < projects.length ? projects[endIndex]?.projectName : null;

  return (
    <div className="pagination__container">
      <div className="pagination">
        {currentPage !== 1 && (
          <PaginationButton
            onClick={handlePrev}
            to={`/${WORK}/${slugFunction(prevItemName)}`}
            title={prevItemName}
            name={prevItemName}
          />
        )}
        {currentPage !== totalPages && (
          <PaginationButton
            onClick={handleNext}
            to={`/${WORK}/${slugFunction(nextItemName)}`}
            title={nextItemName}
            name={nextItemName}
            next
          />
        )}
      </div>
    </div>
  );
};

const PaginationButton = ({ next, onClick, to, title, name }) => {
  return (
    <Link
      className={`button__pag ${next ? "next" : "prev"}`}
      onClick={onClick}
      to={to}
      title={title}
    >
      <div>
        <p>Go to {next ? "Next" : "Previous"} Project</p>
        <h4>{name}</h4>
      </div>
      <span>
        {next ? (
          <svg viewBox="0 0 41 40" fill="none">
            <path
              d="M31.1908 17.4286L17.4455 3.6359L21.0689 0L41 20L21.0689 40L17.4455 36.3641L31.1908 22.5714H0V17.4286H31.1908Z"
              fill="var(--black)"
              fillOpacity="0.6"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 41 40" fill="none">
            <path
              d="M9.80925 17.4286L23.5545 3.6359L19.9311 0L0 20L19.9311 40L23.5545 36.3641L9.80925 22.5714H41V17.4286H9.80925Z"
              fill="var(--black)"
              fillOpacity="0.6"
            />
          </svg>
        )}
      </span>
    </Link>
  );
};

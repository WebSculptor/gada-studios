import "./project.scss";
import { LazyLoadImageComponent } from "components";
import { projects } from "constants";
import { Link } from "react-router-dom";
import { WORK } from "routes";
import { slugFunction } from "utils";

export const ProjectComponent = () =>
  projects?.map((project, id) => {
    const { projectName, type, showcase } = project;

    return (
      <Link
        to={`/${WORK}/${slugFunction(projectName)}`}
        title={projectName}
        className="project_container flex items-center relative"
        key={id}
      >
        <div className="project_info">
          <div className="project_content flex">
            <div className="project_details flex col justify-center">
              <h1>{projectName}</h1>
              <div className="small__text">{type}</div>
              <div className="view_project">
                <div className="small__text">View Project</div>
                <span>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path
                      d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                      fill="var(--orange)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="project_showcase">
          <LazyLoadImageComponent src={showcase} alt={projectName} />
        </div>
      </Link>
    );
  });

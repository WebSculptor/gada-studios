import { team } from "constants";
import "./team.scss";
import { LazyLoadImageComponent } from "components";

const formatRole = (role) => {
  // Split the role into an array using the comma as a separator
  const roleArray = role.split(", ");

  // Render the lines with a comma after the first element
  return (
    <div>
      {roleArray.map((line, index) => (
        <div key={index}>{index === 0 ? line + "," : line}</div>
      ))}
    </div>
  );
};

export const TeamComponent = () => {
  return (
    <div className="team__section">
      <div className="team__header">
        <h1 className="small__title">Meet Our Team</h1>
        <div className="small__text">
          We've built a diverse team with a range of skills in design, management, and engineering. Our team consists of visionary thinkers and accomplished builders dedicated to turning inventive ideas into reality.
        </div>
      </div>
      <div className="team__members grid">
        {team.map((member, id) => (
          <div className="team" key={id}>
            <div className="team__image">
              <LazyLoadImageComponent alt={member.name} src={member.image} />
            </div>
            <div className="team__details">
              <h1>{member.name}</h1>
              <div className="small__text">{formatRole(member.role)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

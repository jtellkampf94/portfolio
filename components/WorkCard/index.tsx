import { urlFor } from "../../sanity";
import { Work } from "../../typing";

interface WorkProps {
  work: Work;
}

const WorkCard: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="work__card">
      <div className="work__card-image-container">
        <img
          className="work__card-image"
          alt=""
          src={urlFor(work.image).url()}
        />
      </div>
      <div className="work__card-icon-container">
        {work.skillList.map((skill) => (
          <img
            key={skill._id}
            className="work__card-icon"
            src={urlFor(skill.image).url()}
            alt="Typescript Logo"
          />
        ))}
      </div>
      <div className="work__card-header">
        <h3>{work.title}</h3>
        <h4>{work.role}</h4>
      </div>
      <div className="work__card-description">
        <h4>Description</h4>
        <ul>
          {work.description.map((description) => (
            <li key={description._id}>{description.description}</li>
          ))}
        </ul>
      </div>
      <div className="work__card-button-container">
        <a href={work.code} target="_blank">
          <button>Code</button>
        </a>
        <a href={work.website} target="_blank">
          <button>Website</button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;

import { urlFor } from "../../sanity";
import { Skills } from "../../typing";

interface SkillCardProps {
  skills: Skills;
}

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <div className="skills__list-container glassomorphic">
      <div className="skills__list-header">
        <h4>{skills.category}</h4>
      </div>
      <ul className="skills__list">
        {skills.skillList.map((skill) => (
          <li key={skill._id} className="skills__list-item">
            <div className="skills__list-item-container">
              <img
                className="skills__list-item-image"
                alt="React Logo"
                src={urlFor(skill.image).url()}
              />
              <div className="skills__list-item-content">{skill.skill}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;

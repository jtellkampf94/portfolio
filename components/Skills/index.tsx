import { Skills as SkillsData } from "../../typing";
import SkillCard from "../SkillCard";

interface SkillsProps {
  skillsLists: SkillsData[];
}

const Skills: React.FC<SkillsProps> = ({ skillsLists }) => {
  return (
    <section className="skills" id="skills">
      <div className="skills__heading">
        <h1>skills</h1>
      </div>
      <div className="skills__container">
        {skillsLists.map((skillsList) => (
          <SkillCard key={skillsList._id} skills={skillsList} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

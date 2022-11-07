import WorkCard from "../WorkCard";
import { Work as WorkData } from "../../typing";

interface WorkProps {
  workList: WorkData[];
}

const Work: React.FC<WorkProps> = ({ workList }) => {
  return (
    <section className="work" id="work">
      <div className="work__heading">
        <h1>work</h1>
      </div>
      <div className="work__container">
        {workList.map((work) => (
          <WorkCard key={work._id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Work;

import { urlFor } from "../../sanity";
import { AboutMe } from "../../typing";

interface AboutProps {
  aboutMe: AboutMe;
}

const About: React.FC<AboutProps> = ({ aboutMe }) => {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <h1>{aboutMe.aboutTitle}</h1>
      </div>
      <div className="about__container">
        <img
          src={urlFor(aboutMe.aboutImage).url()}
          alt="Work Station"
          className="about__image"
        />

        <div className="about__description">
          {aboutMe.about.map((description) => (
            <p key={description._id}>{description.about}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

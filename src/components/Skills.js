import { skillsData } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Skills.css";

const Skills = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className={`skills__container ${isVisible ? "animate" : ""}`}>
        <div className="section-header">
          <span className="section-header__label">What I Know</span>
          <h2 className="section-header__title">Skills & Technologies</h2>
          <p className="section-header__subtitle">
            Technologies I work with to build modern applications
          </p>
        </div>

        <div className="skills__grid">
          {Object.entries(skillsData).map(([key, category], index) => (
            <div
              key={key}
              className={`skills__card skills__card--${index}`}
            >
              <div className="skills__card-icon">{category.icon}</div>
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

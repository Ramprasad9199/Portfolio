import { aboutData } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./About.css";

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className={`about__container ${isVisible ? "animate" : ""}`}>
        <div className="section-header">
          <span className="section-header__label">Get To Know</span>
          <h2 className="section-header__title">About Me</h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__intro">{aboutData.intro}</p>
            <p className="about__description">{aboutData.description}</p>
          </div>

          <div className="about__highlights">
            {aboutData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="about__highlight"
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="about__highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

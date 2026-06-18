import { heroData } from "../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__profile">
          <div className="hero__profile-image-wrapper">
            <div className="hero__profile-ring"></div>
            <img
              src="Ram profile.png"
              alt={heroData.name}
              className="hero__profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero__profile-placeholder" style={{display: 'none'}}>
              {heroData.name.charAt(0)}
            </div>
          </div>
          <div className="hero__status">
            <span className="hero__status-dot"></span>
            <span>Available for opportunities</span>
          </div>
        </div>

        <div className="hero__text">
          <div className="hero__greeting">
            <span className="hero__wave"></span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero__name">{heroData.name}</h1>

          <h2 className="hero__role">
            <span className="hero__role-text">{heroData.role}</span>
          </h2>

          <p className="hero__tagline">{heroData.tagline}</p>

          <div className="hero__cta">
            <button className="hero__btn hero__btn--primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <a href="/Sandrala Ramprasad Resume@S.pdf" className="hero__btn hero__btn--secondary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__code-block">
            <div className="hero__code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre className="hero__code">
              <code>{`const developer = {
  name: "${heroData.name}",
  role: "${heroData.role}",
  skills: ["Java", "React", "MySQL"],
  passion: "Building scalable
   applications"
};`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;

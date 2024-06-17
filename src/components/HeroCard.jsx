const HeroCard = () => {
  return (
    <div className="hero-content-card">
      <h1>
        <span className="hero-highlight">Abraham Wongso Lai</span>, UX/UI
        Designer who loves Front End. Working on projects in Sydney + Melbourne.
      </h1>

      {/* <p>All things UX, UI and Front End.</p> */}

      <div target="_blank" rel="noreferrer" className="hero-bio-container">
        <a href="mailto:abrams.wong@gmail.com">
          <div className="hero-bio-block">
            <img className="hero-bio-icon" alt="" src="/email.svg" />
            <span className="hero-span">Email</span>
          </div>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/abraham-wongso-50795152/"
        >
          <div className="hero-bio-block">
            <img className="hero-bio-icon" alt="" src="/linkedin.svg" />
            <span className="hero-span">Linkedin</span>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="/Abraham-Resume-May30.pdf">
          <div className="hero-bio-block">
            <img className="hero-bio-icon" alt="" src="/opencv.svg" />
            <span className="hero-span">Open CV</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroCard;

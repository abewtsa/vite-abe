const HeroCard = () => {
  return (
    <div className="hero-content-card">
      <h1>
        <span className="hero-highlight">Abraham Wongso Lai</span>, UX/UI
        Designer who loves Front End. Working on projects in Sydney + Melbourne.
      </h1>

      {/* <p>All things UX, UI and Front End.</p> */}

      <div className="hero-bio-container">
        <a href="mailto:abrams.wong@gmail.com">
          <div className="hero-bio-block">
            <img
              className="hero-bio-icon"
              src="https://raw.githubusercontent.com/abewtsa/vite-abe/a8ee4dd140f4f5915ddfedcf9abd7cf506e46360/public/email.svg"
            />
            <span className="hero-span">Email</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/abraham-wongso-50795152/">
          <div className="hero-bio-block">
            <img
              className="hero-bio-icon"
              src="https://raw.githubusercontent.com/abewtsa/vite-abe/a8ee4dd140f4f5915ddfedcf9abd7cf506e46360/public/linkedin.svg"
            />
            <span className="hero-span">Linkedin</span>
          </div>
        </a>

        <a href="mailto:abrams.wong@gmail.com">
          <div className="hero-bio-block">
            <img
              className="hero-bio-icon"
              src="https://raw.githubusercontent.com/abewtsa/vite-abe/a8ee4dd140f4f5915ddfedcf9abd7cf506e46360/public/opencv.svg"
            />
            <span className="hero-span">Open CV</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroCard;

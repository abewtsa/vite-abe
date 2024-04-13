// import HeroSection from '../components/HeroSection.jsx';
import Section from '../components/Section.jsx';
import Projects from './Projects.jsx';
// import Cheatsheet from './Cheatsheet.jsx';

export default function Home() {

return (
<>
  {/* <HeroSection/> */}

  <div className='main-wrapper'>
    <div className='container-680'>

      <Section
      header="Abraham Wongso - UX / UI / Front End"
      subheader="UX/UI Designer with a passion in front end technologies and delivering great digital experiences."

      textcopy="Hello and welcome! 👋

      For the past 5 years, my UI/UX work has been largely in enterprise CX, with hands-on involvement in content update, management and UX design for one of the largest Australian non for profit.

      My projects and designs that you can explore in this site revolve around Figma prototypes, React and NextJS. While this site is still a work in progress, I'm hopeful that you will find useful information.

      Figma links and projects are listed below, and you can reach out to me by email."
      >
      <p>✉️ <a className="special-link" target="_blank" rel="noreferrer" href="mailto:abrams.wong@gmail.com"><strong>Email</strong></a></p>
      </Section>

      {/* <Section
      header="UX Design - Not for Profit Digital Fundraising Model"
      textcopy="This 3 part blog entries will discuss and explore the common digital model used by Australian charities, giving a digital anatomy of Digital Fundraising activities, with examples of relevant UX artefacts."

      buttonClassName="btn"
      buttonText="Coming soon"
      // buttonLink='https://www.google.com'

      /> */}

      {/* <Section
      header="Figma prototype - YesFresh!"
      textcopy="YesFresh! is a self started project, mainly inspired by how Google's Material Design, Apple iOS design guide, and Figma's most recent features, such as Variables and Auto Layouts."
      // buttonClassName="btn"
      // buttonText="See in Figma"
      // buttonLink="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design"
      >

      <p><a className="special-link" target="_blank" href="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design">See in Figma</a></p>

      </Section> */}
    </div>
  </div>

  <Projects />
  {/* <Cheatsheet /> */}

</>
    );
}

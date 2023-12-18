import Section from '../components/Section.jsx';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";

const Projects = () => {
  return (
    <>
    <div className='main-wrapper'>
    <div className='container-680'>

    <Section 
        header="Lab Projects"
        textcopy="NextJS/Astro static site
        Medusa E-Commerce with NextJS
        MERN stack project
        MUI or Radix implementation
        MDX deployment
        Gatsby inspired lightweight Design System with React
        "
    >
    <p><a className="special-link" target="_blank" href="https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma">Todo with Firebase</a> - Simple Todo site with Firebase DB<br />
    <a className="special-link" target="_blank" href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg">Todo from WebdevSimplified</a> simple todo
    </p>
    
    </Section>

    <Section
        header="Figma"
        textcopy="YesFresh!"
    >
    <p><a className="special-link" target="_blank" href="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design">YesFresh!</a> - High fidelity prototype for a delivery-catering hybrid customer app</p>

    </Section>

    <Section
        header="Launchpads"
        textcopy="Something Random Everyday - Generative content
        Headless Donation page"
    >
    
    </Section>

    </div>
    </div>
    {/* <div className="spacer layer1"></div>     */}
    </>
    )
}

export default Projects
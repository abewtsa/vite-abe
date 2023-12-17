import Section from '../components/Section.jsx';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";

const Projects = () => {
  return (
    <>
    <Section 
        header="Lab Projects"
        textcopy="NextJS static site
        Medusa E-Commerce with NextJS
        MERN stack project
        MUI or Radix implementation
        MDX deployment
        Gatsby inspired lightweight Design System with React
        "
    >
    <p><a className="special-link" href="https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma">Todo with Firebase</a> - Simple Todo site with Firebase DB<br />
    <a className="special-link" href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg">Todo from WebdevSimplified</a> simple todo
    </p>
    
    </Section>

    <Section
        header="Launchpads"
        textcopy="Something Random Everyday - Generative content
        Headless Donation page"
    >
    
    </Section>

    </>
    )
}

export default Projects
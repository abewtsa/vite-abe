import Section from '../components/Section.jsx';
import { NavLink } from 'react-router-dom';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";

const Projects = () => {
  return (
    <>
    <Section 
        header="Current and past projects and Roadmap"
        textcopy="
        Simple Todo
        NextJS project
        Medusa E-Commerce with NextJS
        MERN stack project
        MDX deployment
        Gatsby inspired lightweight Design System with React
        "
    />

    <Section 
        header="Todo from WebdevSimplified"
        
        link="https://www.google.com"
        linkClassName="special-link"
        linkText="Link"
    />

    </>
    )
}

export default Projects
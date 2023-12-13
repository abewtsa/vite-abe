import Section from '../components/Section.jsx';
import { NavLink } from 'react-router-dom';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";

const Projects = () => {
  return (
    <>
    <Section 
        header="Upcoming projects"
        textcopy="NextJS static site
        Medusa E-Commerce with NextJS
        MERN stack project
        MUI or Radix implementation
        MDX deployment
        Gatsby inspired lightweight Design System with React
        "
    />

    <Section 
        header="Todo with Firebase"

        textcopy="Simple Todo site with Firebase db live implementation"
        
        link="https://abe-todo.netlify.app/"
        linkClassName="special-link"
        linkText="Link"
    />

    <Section 
        header="Todo from WebdevSimplified"

        textcopy="Another todo"
        
        link="https://www.google.com"
        linkClassName="special-link"
        linkText="Link"
    />

    </>
    )
}

export default Projects
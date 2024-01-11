import Section from '../components/Section.jsx';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";

const Projects = () => {
  return (
    <>
    <div id='projects' className='main-wrapper'>
    <div className='container-680'>

    <Section
        header="Figma"
    >
    <p><a className="special-link" target="_blank" href="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design">YesFresh!</a> - High fidelity prototype for a food delivery-catering hybrid app<br />
    <a className="special-link" target="_blank" href="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design">
    <img width='450px' height='300px' src='https://raw.githubusercontent.com/abewtsa/vite-abe/master/public/YesFresh.jpg'></img></a><br /><br />
    <a className="special-link" target="_blank" href="https://www.figma.com/proto/O6vsMOXDTZaAfZeLw7wu9J/Netlink-mockup-14-Dec-2023?page-id=0%3A1&type=design&node-id=98-533&viewport=1070%2C2777%2C0.26&t=NolAobrZsJ0sYSA1-1&scaling=min-zoom&starting-point-node-id=98%3A533&mode=design">Netlink</a> - Prototype for a static Agency site<br />
    <a className="special-link" target="_blank" href="https://www.figma.com/proto/O6vsMOXDTZaAfZeLw7wu9J/Netlink-mockup-14-Dec-2023?page-id=0%3A1&type=design&node-id=98-533&viewport=1070%2C2777%2C0.26&t=NolAobrZsJ0sYSA1-1&scaling=min-zoom&starting-point-node-id=98%3A533&mode=design"><img width='450px' height='300px' src='https://raw.githubusercontent.com/abewtsa/vite-abe/master/public/Netlink-home.jpg'></img></a><br /><br />
    Short Donation Form - TSA 2019 version - coming soon!</p>


    </Section>

    <Section 
        header="Current Projects"
        textcopy="Astro site
        Medusa E-Commerce with NextJS
        MERN stack project
        Endless Tailwind UI frame
        Storybook
        Lightweight boilerplate Design System with React
        Chrome Extension
        "
    >
    <p>
        <a className="special-link" target="_blank" href="https://nextcore.digital">Nextcore Digital - NextJS site</a><br />
        <a className="special-link" target="_blank" href="https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma">Todo with Firebase</a> - Simple Todo site with Firebase DB<br />
    {/* <a className="special-link" target="_blank" href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg">Todo from WebdevSimplified</a> simple todo */}
    </p>
    
    </Section>

    <Section
        header="Launchpads"
        textcopy="Something Random Everyday - Generative content
        Headless Donation page - do you want fries with your personalisation?"
    >
    
    </Section>

    </div>
    </div>
    {/* <div className="spacer layer1"></div>     */}
    </>
    )
}

export default Projects
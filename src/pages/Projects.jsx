import Section from '../components/Section.jsx';
import Button from "../components/Button.jsx";
// import Text from "../components/Text.jsx";

const Projects = () => {
  return (
    <>
    <div id='projects' className='main-wrapper'>
    <div className='container-680'>

    <Section
    header="Figma Prototype - YesFresh!"
    >
    <p>YesFresh! is a design for a food delivery-catering hybrid application. It offers the features of being able to select menus from your local restaurants for planned scheduled deliveries.</p>
    <Button
        buttonClassName='btn'
        buttonText='See in Figma'
        buttonFunc=''
        buttonLink='https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design'
    />
    <p>
    <a className="special-link" target="_blank" rel="noreferrer" href="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design">
    <img width='450px' height='300px' src='https://raw.githubusercontent.com/abewtsa/vite-abe/master/public/YesFresh-Splash.jpeg'></img></a>
    </p>

    </Section>

    <Section
      header="HOOPS - Event QR codes Web App"
    >
    <p>HOOPS is an event booking and management platform to simplify event management and promotion with QR codes. Currently work in progress! To visit the landing sample page click below.</p>
    <Button
        buttonClassName='btn'
        buttonText='HOOPS Landing page'
        buttonFunc=''
        buttonLink='https://hoopsqr.netlify.app/landing'
    />

    <p>To see the Figma prototype click below.</p>
    <Button
        buttonClassName='btn'
        buttonText='HOOPS Figma prototype'
        buttonFunc=''
        buttonLink='https://www.figma.com/file/NzsVQ96NwIt7TgKdcO04SW/HOOPS---Sandbox?type=design&node-id=1%3A4620&mode=design&t=mAbSrO9j16vDn28q-1'
    />
    <p>

    <a className="special-link" target="_blank" rel="noreferrer" href="https://hoopsqr.netlify.app/landing">
    <img width='450px' height='300px' src='https://raw.githubusercontent.com/abewtsa/vite-abe/master/public/Hoops-website.jpg'>
    </img>
    </a>
    </p>


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
        <a className="special-link" target="_blank" rel="noreferrer" href="https://nextcore.digital">Nextcore Digital - NextJS site</a><br />
        <a className="special-link" target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma">Todo with Firebase</a> - Simple Todo site with Firebase DB<br />
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

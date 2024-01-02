import Section from '../components/Section.jsx';
import Projects from './Projects.jsx';
import Cheatsheet from './Cheatsheet.jsx';

export default function Home() { 

return (
<>
<div className='main-wrapper'>

<div className='container-680'>
<Section
header="Hello and welcome 👋"
textcopy="I'm Abraham, UI/UX Designer for the past 5 years and currently having a lot of fun delving into front end stuffs.

This is where I link to my test projects and shape my thoughts (or add some random musings) around all things React and JS. So, while this site can be a bit messy, do please check things out, and I will migrate it to Astro or Next at some point.

Reach out to me by email (and social, soon)."
>
<p><a className="special-link" target="_blank" href="mailto:abrams.wong@gmail.com">Email</a></p>
</Section>


<Section
header="UX Design - Not for Profit Digital Fundraising Model"
textcopy="This 3 part blog entries will discuss and explore the common Digital Model used by Australian charities, giving a digital anatomy of Digital Fundraising activities, with examples of relevant UX artefacts."

buttonClassName="btn"
buttonText="Coming soon"
// buttonLink='https://www.google.com'

/>

<Section
header="Figma prototype - YesFresh!"
textcopy="YesFresh! is a self started project, mainly inspired by how Google's Material Design, Apple iOS design guide, and Figma's most recent features, such as Variables and Auto Layouts."
// buttonClassName="btn"
// buttonText="See in Figma"
// buttonLink="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design"
>
  
<p><a className="special-link" target="_blank" href="https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design">See in Figma</a></p>

</Section>
</div>

</div>


<Projects />
<Cheatsheet />
{/* <div className="spacer layer1"></div> */}
{/*<Card>
        <Image
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />

        <Image
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />

</Card>
*/}

</>
    );
}
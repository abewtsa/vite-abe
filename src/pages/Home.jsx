import Section from '../components/Section.jsx';

export default function Home() {
  const func = () => {
    console.log("React");
  };
  
return (
<>
<Section
header="Welcome to my React Lab"
textcopy="My name is Abraham Wong, UI/UX Designer and Front End Developer.

This is where I test and develop all things React and JS. As such, this site can be messy but if you're looking to checkout my current or past projects, you're at the right place.

Lately I've taken an interest in NextJS as well for the SSR features, and other frameworks like AlpineJS or SolidJS.

Reach out to me by email (and social, soon).
"
/>

<Section
header="UX Design - Not for Profit Digital Fundraising Model"
textcopy="This is a 3 part blog post on the contemporary Not for Profit (or NFP) Digital Fundraising Model based on my professional experience working in the Non Profit industry.

The blog entries will discuss and explore the common Digital Model used by Australian charities, giving a digital anatomy of Digital Fundraising activities, with examples of relevant UX artefacts."

buttonClassName="btn"
buttonText="Read more"
buttonLink='https://www.google.com'

/>

<Section
header="Figma prototype - YesFresh!"
textcopy="YesFresh! is a self started project, with the initial goal of exploring the latest iOS and Android UI/UX design trend divergence and convergence.

Mainly inspired by how Google's Material Design changed and matured each year, and that Apple iOS design guide now has an officially distributed Figma design.

Instead, I found myself focusing on Figma's most recent features, such as Variables and Auto Layouts. 

In what feels like a Figma refresh boot camp, I can't help to think that if you want to produce a coherent high fidelity prototype, you can't escape making and utilising a mini design system."

buttonClassName="btn"
buttonText="See in Figma"
buttonLink='https://www.google.com'
/>    

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
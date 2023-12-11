import Section from '../components/Section.jsx';

export default function Home() {
  const func = () => {
    console.log("React");
  };
  
return (
<>
<Section
header="Welcome to my React Lab"
textcopy="This is where I learn and develop to test and try different things. As such, this site will be quite messy for the foreseeable future.

To see current or past projects go to the Projects section.

Lately I've taken an interest in Vue as well, and light weight frameworks like AlpineJS or Petite Vue (and SolidJS).

Reach out to me by email (and social, soon).
"
/>

<Section
header="UX Design - Not for Profit Digital Fundraising Model"
textcopy="3 part blog post on the contemporary Not for Profit (or NFP) Digital Fundraising Model.

The blog entries will discuss and explore the common Digital Model used by Australian charities, with examples of digital artefacts from Personas to interactive Prototypes."

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
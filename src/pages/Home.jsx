import Section from '../components/Section.jsx';

export default function Home() {
  
return (
<>
<Section
header="Hello and welcome 👋"
textcopy="My name is Abraham Wong, UI/UX Designer for the past 5 years and currently having a lot of fun delving into Front End stuffs since the end the 2023.

This is where I link to my test projects and shape my thoughts (or add some random musings) around all things React and JS. So, while this site can be a bit messy, do please check things out, and I will migrate it to Astro or Next at some point.

Reach out to me by email (and social, soon)."
>
<p><a className="special-link" href="mailto:abrams.wong@gmail.com">Email</a></p>
</Section>

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
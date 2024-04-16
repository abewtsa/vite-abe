import Section from '../components/Section.jsx';
import ProfileCard from '../components/ProfileCard.jsx';

const developerData = {
  name: 'Abraham Wong',
  place: 'Melbourne + Sydney',
  role: 'UX/UI Designer and Frontend Developer',
  bio: 'Likes ☕ , clean design, product development, and meaningful user experience.',
  imageUrl: 'https://raw.githubusercontent.com/abewtsa/vite-abe/master/public/photo-1.jpg',

  socialIcons: [
    {
      link: 'https://github.com/abewtsa',
      icon: 'https://www.svgrepo.com/show/35001/github.svg',
    },
    {
      link: 'https://www.linkedin.com/in/abraham-wongso-50795152/',
      icon: 'https://www.svgrepo.com/show/452051/linkedin.svg',
    },
    // Add more social icons as needed
  ],
};

const About = () => {
  return (
  <>
  <div id='about' className='main-wrapper'>
  <div className='container-680'>
  <Section
  header="About me"
  textcopy="I've always had a love for design with strong inclination to all things tech.

  Dad brought home an unused PC from work one day and I spent the whole afternoon coming up with silly designs in Paintshop Pro on a Win95.

  My career started as a print designer agency side roughly 10 years ago and I gradually moved more onto the digital side of things and I have been working in UX and corporate CX in the last 5 years.
  " />
  </div>

  {/* Since the end of 2023, I've been doing a lot of research (mainly on React and its adjacent JS ecosystem), learning and just generally doing web development stuff in my free time. This site also gives me an excuse to play around with new trends and share my experiences.

  The ability to start with product ideas and deploy live solutions have always fascinated me, so that's why I find myself enjoying both design and development. */}

  <div>
  <ProfileCard {...developerData} />
  </div>

  </div>

  {/* <div className="spacer layer1"></div> */}
  </>
  )
}

export default About

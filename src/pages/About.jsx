import Section from '../components/Section.jsx';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";

import ProfileCard from '../components/ProfileCard.jsx';

const developerData = {
  name: 'Abraham Wongso',
  place: 'Melbourne + Sydney',
  role: 'UX/UI/Frontend Designer and Developer ☕',
  // skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  bio: 'Likes code, design, product development, meaningful user experience and engagement.',
  imageUrl: 'https://raw.githubusercontent.com/abewtsa/vite-abe/master/public/mejapan.jpg',

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
  <div className='main-wrapper'>

  <div className='container-680'>
  <Section 
  header="About me" 
  textcopy="I've had a love of design for a long time with a strong inclination to all things tech.
  
  My career started as a print designer agency side 10 years ago and I gradually moved more onto the digital side of things and I have been working in UX and corporate CX in the last five years.
  
  And now I find myself enjoying lots of coding!
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
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
};   

const About = () => {
  return (
  <>
  <div className='main-wrapper'>

  <div className='container-680'>
  <Section 
  header="About me" 
  textcopy="I've had a love of design for a long time with a strong inclination to all things tech. My career started as a packaging designer agency side 10 years ago and I gradually moved more onto the digital side of things.
  
  Now I find myself enjoying lots of coding!

  Since the end of 2023, I've been doing a lot of research (mainly on React and its adjacent JS ecosystem), learning and just generally doing web development stuff in my free time. This site also gives me an excuse to play around with new trends and share my experiences.
  
  The design and development of successful products have always fascinated me, so naturally that's where I'm heading.
  " />
  </div>

  <div>
  <ProfileCard {...developerData} />
  </div>
  
  </div>

  {/* <div className="spacer layer1"></div>     */}
  </>
  )
}

export default About
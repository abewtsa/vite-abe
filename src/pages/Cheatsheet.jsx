import Section from '../components/Section.jsx';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";
import Link from '../components/Link.jsx';

const Cheatsheet = () => {
  return (
  <>
  
  <Section
  header="Tools" 
  // textcopy="Tools and cheatsheets for personal and professional uses"
  >
  <p><a className="special-link" href="https://fontjoy.com/">Fontjoy</a> - font pairing generator<br />
  <a className="special-link" href="https://coolors.co/">Coolors</a> - colour palette generator<br />
  <a className="special-link" href="https://angrytools.com/css-flex/">Angry Flexbox</a> - flexbox sandbox<br />
  </p>

  </Section>
  
  <Section
  header="Chrome Extensions" 
  >
  <p><a className="special-link" href="https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma">Web Vitals</a> - audit-in-a-glance for web page performance<br />
  <a className="special-link" href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg">Wappalyzer</a> - look into web page's tech stacks
  </p>

  </Section>

  <Section
  header="Cheatsheet - 50 UX principles" 
  // textcopy="Tools and cheatsheets for personal and professional uses"
  ></Section>
  
  {/* <Link 
      linkClassName="noname"
      link="https://www.google.com"
      linkText="Testlink"
  /> */}

  </>
  )
}

export default Cheatsheet;
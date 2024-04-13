import Section from '../components/Section.jsx';
// import Button from "../components/Button.jsx";
// import Text from "../components/Text.jsx";
// import Link from '../components/Link.jsx';
import AccordionList from '../components/Collapse.jsx';

const Cheatsheet = () => {
  return (
  <>
  <div id='cheatsheet' className='main-wrapper'>
  <div className='container-680'>

  <Section
  header="Tools"
  // textcopy="Tools and cheatsheets for personal and professional uses"
  >
  <p>
  <a target="_blank" rel="noreferrer" href="https://materialui.co/">Materialui.co</a> - colours and styles<br />
  <a target="_blank" rel="noreferrer" href="https://typescale.com/">Typescale</a> - typescale generator<br />
  <a target="_blank" rel="noreferrer" href="https://lottiefiles.com/">LottieFiles</a> - lottie SVG animations<br />
  <a target="_blank" rel="noreferrer" href="https://www.lottielab.com/">LottieLab</a> - lottie editor and creator<br />
  <a target="_blank" rel="noreferrer" href="https://fontjoy.com/">Fontjoy</a> - font pairing generator<br />
  <a target="_blank" rel="noreferrer" href="https://coolors.co/">Coolors</a> - colour palette generator<br />
  <a target="_blank" rel="noreferrer" href="https://angrytools.com/css-flex/">Angry Flexbox</a> - flexbox sandbox<br />
  <a target="_blank" rel="noreferrer" href="https://javascript.info/">https://javascript.info/</a> - JS guide<br />
  <a target="_blank" rel="noreferrer" href="https://daisyui.com/">DaisyUI</a> - Tailwind UI component library<br />
  <a target="_blank" rel="noreferrer" href="https://www.hyperui.dev">HyperUI</a> - Open source Tailwind UI component library<br />
  <a target="_blank" rel="noreferrer" href="https://app.haikei.app/">Haikei</a> - SVG generator for flair and flavour<br />
  </p>


  </Section>

  <Section
  header="Chrome Extensions"
  >
  <p>
  <a target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/detail/locatorjs/npbfdllefekhdplbkdigpncggmojpefi">LocatorJS</a> - stops wasting time finding code on page - React/Vue only<br />
  <a target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma">Web Vitals</a> - audit-in-a-glance for web page performance<br />
  <a target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg">Wappalyzer</a> - look into web page's tech stacks
  </p>

  </Section>

  <Section
  header="100 Universal Principles of UX"
  >
  <p>Book by Irene Pereyra 👉 <a target="_blank" rel="noreferrer" href="https://www.dropbox.com/s/z2totj4uzoicfj3/Universal_Principles_of_UX_Preview.pdf">https://book.antonandirene.com/</a></p>
  <AccordionList />
  </Section>


  {/* <Link
      linkClassName="noname"
      link="https://www.google.com"
      linkText="Testlink"
  /> */}
  </div>
  </div>
  {/* <div className="spacer layer1"></div>     */}
  </>
  )
}

export default Cheatsheet;

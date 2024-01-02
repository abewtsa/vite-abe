import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ToggleImages from './Toggle.jsx'

{/*import { ReactComponent as Hamburger } from '../assets/logo.svg'; */}

const Navbar = () => {

  // Variables and useState for mobile render and Icon image management with Toggle comonent
  const [showNavbar, setShowNavbar] = useState(false)
  const [active, setActive] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    }

  const handleChangeActive = () => {
      setActive((previousStar) => {
        return !previousStar
      })
   } 
   
  // Eventlistener with useEffect for sticky menu
  const [stickyClass, setStickyClass] = useState('');
  const [stickyDesktop, setStickyDesktop] = useState('menu-icon');
  const [stickyMobile, setStickyMobile] = useState('menu-icon');

  const currentScrollPos = window.scrollY;

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setStickyDesktop('sticky-desktop') : setStickyDesktop('menu-icon');
      windowHeight > 80 ? setStickyMobile('sticky-mobile') : setStickyMobile('element-none');
      windowHeight > 80 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <>
    
    <div className={`nav-elements ${stickyDesktop} mobile-none`}>
          <ul>
              <p style={{lineHeight:"1.8rem"}}><NavLink to="/">Home</NavLink><br />
              <NavLink to="/projects">Projects</NavLink><br />
              <NavLink to="/cheatsheet">Cheatsheet</NavLink><br />
              <NavLink to="/about">About</NavLink><br />
              <NavLink to="/contact">Contact</NavLink><br />              
              </p>
          </ul>
    </div>

    <div className={`${stickyMobile}`} onClick={scrollToTop}>
          <ul style={{paddingLeft:"55px"}}>
          TOP ▲
          </ul>
    </div>

    <nav className={`navbar`}>
      
      <div className="container-header">
        {/*  Hamburger  */}
        <div className={`menu-icon ${stickyClass}`} onClick={handleShowNavbar}>
        <ToggleImages active={active} handleChangeActive={handleChangeActive}/>
        </div>

        <div className={`nav-elements ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/cheatsheet">Cheatsheet</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  
    </>
  )
}

export default Navbar
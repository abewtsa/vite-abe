import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ToggleImages from './Toggle.jsx'

{/*import { ReactComponent as Hamburger } from '../assets/logo.svg'; */}

const Navbar = () => {

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

  
  return (
    <nav className="navbar">
      <div className="container-header">
        <div className="menu-icon" onClick={handleShowNavbar}>
        
        <ToggleImages active={active} handleChangeActive={handleChangeActive}/>
        
        {/*  <Hamburger /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
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
  )
}

export default Navbar
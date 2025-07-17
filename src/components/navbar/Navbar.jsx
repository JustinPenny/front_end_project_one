import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
import './navbar.css'
import { useState } from 'react'


// The use of <> to return multiple elements is called a React Fragment. Need to study more about React DOM
const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wcontent">What is GPT? (Summerville?)</a></p>
  <p><a href="#possibility">Open AI (Down town?)</a></p>
  <p><a href="#features">Case Studies (Things to do?)</a></p>
  <p><a href="#blog">Library (History?)</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="content__navbar">
      <div className='content__navbar-links'>
        <div className='content__navbar-links_logo'>
          <img src={logo} alt="logo"/>
          <div className='content__navbar-links_container'>
            <Menu />
          </div>
        </div>
      </div>
      <div className='content__navbar-sign'>
        <p>Sign In</p>
        <button type="button">Sign up</button>
      </div>
      <div className='content__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }

        {/* toggleMenu && -> if menu is toggled and the variable is true, execute block */}
        {toggleMenu && (
          <div className="content__navbar-menu_container scale-up-center">
            <div className="content__navbar-menu_container-links">
              <Menu />
              <div className='content__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar

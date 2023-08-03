import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  window.addEventListener("scroll", function () {
      const header = document.querySelector(".header")
      header.classList.toggle("active", window.scrollY > 200)
  })
return (
  <>
      <header className='header'>
        <div className='container flex'>
            <div className='logo'>
              <a href='/'>Global<span>Talents</span></a>
            </div>
            <div className='nav'>
              <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/freelancer'>FreeLancer</a></li>
                  <li><a href='/contact'>Learning</a></li>
                  <li><a href='/'>SOmehting</a></li>
                  <li className='btn'><a href='/user-profile'>Profile</a></li>
              </ul>
            </div>
            <button className='navbar-item-icon' onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </button>
        </div>
      </header>
  </>
)
}


export default NavBar;
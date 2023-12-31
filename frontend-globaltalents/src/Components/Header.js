import React, {useState} from 'react'
import './Header.css';

export const Header = (props) => {
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
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>{props.t1}</a></li>
                    <li><a href='/'>{props.t2}</a></li>
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

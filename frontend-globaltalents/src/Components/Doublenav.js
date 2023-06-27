import React, { useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Doublenav = () => {
    const [sidebar, setSidebar] = useState(false)
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
                    <li><a href='/'><i className="fa-regular fa-bell"></i></a></li>
                    <li><a href='/'><i className="fa-solid fa-user"></i></a></li>
                </ul>
              </div>
              <button className='navbar-item-icon' onClick={() => setSidebar(!sidebar)}>
                {sidebar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
              </button>
          </div>
          <div className='second-nav'>
            <div className='sec-container'>
                <ul>
                    <li><Link to='/details'>Job Post</Link></li>
                    <li><Link to='/proposals'>Proposals</Link></li>
                    <li><Link to='/hired'>Hired</Link></li>
                </ul>
            </div>
          </div>
    </header>
    </>
  )
}

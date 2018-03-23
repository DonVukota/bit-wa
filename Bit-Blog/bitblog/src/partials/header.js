import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">BitBlog</a>
        <ul  className=" hide-on-med-and-down">
          <Link to='/'><li><a href="sass.html">Home</a></li></Link>
          <Link to='/Autors'><li><a href="badges.html">Autors</a></li></Link>
          <Link to='/About'> <li><a href="collapsible.html">About</a></li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
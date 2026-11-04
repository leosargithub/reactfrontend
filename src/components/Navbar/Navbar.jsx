import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  
  return (
    <nav className="navbar">
      <div className="logo">
        Blog site<span>.</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a onClick={()=>navigate('/createBlog')}>Crate Blogs</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a href="#contact" className="nav-btn">
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar

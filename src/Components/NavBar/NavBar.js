import React from 'react'

import "./NavBar.css";
function NavBar() {
  return (
    <div className='NavBar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <div class="topnav">
         <a class="active" href="#home">Home</a>
         <a href="about">TV Shows</a>
         <a href="contact">Movies</a>
      </div>
    
      <form className="search">
        <input className="sch" type="text" placeholder="Search" aria-label="Search" />
      </form>


    <img className='Avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
  )
}

export default NavBar
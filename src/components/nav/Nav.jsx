import React from 'react'
import './nav.css'
import {TiHome} from 'react-icons/ti'
import {FaUserCircle} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {MdWork} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}><TiHome/>Home</a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'active':''}><FaUserCircle/>About</a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><MdSchool/>Education & Skills</a>
      <a href='#porforlio' onClick={()=> setActiveNav('#porforlio')} className={activeNav==='#porforlio'?'active':''}><MdWork/>Projects</a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><RiServiceFill/>Contact me</a>
    </nav>
  )
}

export default Nav
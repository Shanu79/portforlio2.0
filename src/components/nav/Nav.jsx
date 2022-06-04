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
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}>
        <TiHome className='nav_icons'/>
        <div>
          <small className='text-light-nav'>Home</small>
        </div>
      </a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'active':''}>
        <FaUserCircle className='nav_icons'/>
        <div>
          <small className='text-light-nav'>About me</small>
        </div>
      </a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}>
        <MdSchool className='nav_icons'/>
        <div>
          <small className='text-light-nav'>Education & skills</small>
        </div>
      </a>
      <a href='#porforlio' onClick={()=> setActiveNav('#porforlio')} className={activeNav==='#porforlio'?'active':''}>
        <MdWork className='nav_icons'/>
        <div>
          <small className='text-light-nav'>Projects & Experience</small>
        </div>
      </a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}>
        <RiServiceFill className='nav_icons'/>
        <div>
          <small className='text-light-nav'>Contact me</small>
        </div>
      </a>
    </nav>
  )
}

export default Nav
import React from 'react'
import './nav.css'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}>
      <span class="material-symbols-rounded">
cottage
</span>
        <div>
          <small className='text-light-nav'>Home</small>
        </div>
      </a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'active':''}>
      <span class="material-symbols-rounded">
face
</span>
        <div>
          <small className='text-light-nav'>About me</small>
        </div>
      </a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}>
      <span class="material-symbols-rounded">
school
</span>
        <div>
          <small className='text-light-nav'>Education & skills</small>
        </div>
      </a>
      <a href='#porforlio' onClick={()=> setActiveNav('#porforlio')} className={activeNav==='#porforlio'?'active':''}>
      <span class="material-symbols-rounded">
work
</span>
        <div>
          <small className='text-light-nav'>Projects & Experience</small>
        </div>
      </a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}>
      <span class="material-symbols-rounded">
handshake
</span>
        <div>
          <small className='text-light-nav'>Contact me</small>
        </div>
      </a>
    </nav>
  )
}

export default Nav
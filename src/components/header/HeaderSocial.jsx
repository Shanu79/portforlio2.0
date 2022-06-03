import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='' target="_blank"><GrLinkedin/></a>
        <a href='' target="_blank"><AiOutlineGithub/></a>
        <a href='' target="_blank"></a>
    </div>
  )
}

export default HeaderSocial
import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href='https://drive.google.com/file/d/18OxnOLsmBPpFHv_Qv_esJyDaA_nKdNdY/view?usp=sharing' download className='btn' target='_blank'>See my Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
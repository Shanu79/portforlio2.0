import React from 'react'
import './about.css'
import ME from '../../assets/dp.png'

const About = () => {
  return (
    <section id='about'>
      <h2>. . .</h2>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <p>
            I am a second year undergraduate student of Electrical Engineering Department of NIT Rourkela. I have some in-depth knowledge of web development techniques, object-oriented programming, graphic designing. And have little experience in cloud computing. Currently on my journey to become an expert level C++ programmer. Till now I have more than 1 year experience in C++.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
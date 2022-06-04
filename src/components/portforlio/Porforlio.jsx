import React from 'react'
import './portforlio.css'
import IMG1 from '../../assets/work1.png'
import IMG2 from '../../assets/work2.png'
import IMG3 from '../../assets/work3.jpg'
import IMG4 from '../../assets/work3.jpg'
import IMG5 from '../../assets/work3.jpg'
import IMG6 from '../../assets/work3.jpg'

const Porforlio = () => {
  return (
    <section id='porforlio'>
      <h2>. . .</h2>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portforlio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>Item Title</h3>
          <div className='cta'>
            <a href='' className='btn' target="_blank">GitHub</a>
            <a href='' className='btn btn-primary' target="_blank">LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3>Item Title</h3>
          <div className='cta'>
            <a href='' className='btn' target="_blank">GitHub</a>
            <a href='' className='btn btn-primary' target="_blank">LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>Item Title</h3>
          <div className='cta'>
            <a href='' className='btn' target="_blank">GitHub</a>
            <a href='' className='btn btn-primary' target="_blank">LiveDemo</a>
          </div>
        </article>
      </div>

      <h2>. . .</h2>
      <h5>My</h5>
      <h2>Experience</h2>
      <div className='container exp__container'>
      <div className='exp__skills'>
          <h3>National Institute of Technology, Rourkela</h3>
          <div className='exp__content'>
            <article className='exp__details'>
                <div>
                  <h4>B.tech</h4>
                  <h4>Electrical & Electronics Engineering</h4>
                  <small className='text-light'>2020-present</small>
                </div>
            </article>
          </div>
        </div>
        <div className='exp__skills'>
          <h3>Desiger at One Solutions, Jeypore</h3>
          <div className='exp__content'>
            <article className='exp__details'>
                <div>
                  <h5>Summer Intern</h5>
                  <h5>April 2021-June 2021</h5>
                  <small className='text-light'>Created the main website of the kingdom of Jey‐pore. And revamped the old kingdom emblem/logo
with modern graphic software.</small>
                  <h5>...</h5>
                  <small className='text-light'>Technologies used: Figma, Adobe Photoshop, Adobe
Illustrator, Wordpress</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Porforlio
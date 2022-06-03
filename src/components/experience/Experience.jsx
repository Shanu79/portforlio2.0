import React from 'react'
import './experience.css'
import {MdDeveloperMode} from 'react-icons/md'
import {VscCode} from 'react-icons/vsc'
import {SiAdobeillustrator} from 'react-icons/si'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>. . .</h2>
      <h5>What I do ? and What skills I have?</h5>
      <div className='container experience__container'>
        <div className='experience__work'>
          <h3>I do</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                <MdDeveloperMode className='experience__details-wicon'/>
                <h4>Front-end Development</h4>
            </article>
            <article className='experience__details'>
                <VscCode className='experience__details-wicon'/>
                <h4>Competitive Programming</h4>
            </article>
            <article className='experience__details'>
                <SiAdobeillustrator className='experience__details-wicon'/>
                <h4>Designing</h4>
            </article>
          </div>
        </div>

        <div className='experience__skills'>
          <h3>I know</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermidiate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermidiate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS 3</h4>
                <small className='text-light'>Intermidiate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML 5</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
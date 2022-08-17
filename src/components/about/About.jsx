import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import reakt from '../../assets/reakt.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
      <img src={reakt} alt="About" />
      </div>
        </div>

    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>CCCC</small>
        </article>

        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>CCCC</small>
        </article>

        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>CCCC</small>
        </article>
        </div>

        <p> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias fugit iure inventore! Similique tempora blanditiis sed sunt non quas? Dolorem quam assumenda possimus quasi tempore ipsum accusantium dolores? Odio, impedit.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
    </div>

    </section>
  )
}

export default About

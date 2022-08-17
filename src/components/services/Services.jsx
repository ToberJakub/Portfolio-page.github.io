import React from 'react'
import './services.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="servide__head">
          <h3></h3>
        </div>

        <ul className='service__list'>
          <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>lorem ipsum</p>
          </li>
        </ul>
      </article>
    </div>
    </section>

  )
}

export default Services
import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='content__header section__padding' id="home">
      <div className='content__header-content'>
        <h1 className='gradient__text'> Come explore the amazing Downtown Summerville</h1>
        <p>blurb about summerville here</p>

        <div className='content__header-content__input'>
          <input type = "email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
      
        <div className='content__header-content__people'>
          <img src={people} alt="people"></img>
          <p>300 people have signed up for tours in the last 24 hours</p>
        </div>
      </div>

      <div className='content__header-image'>
        <img src={ai} alt='ai'></img> {/* TODO: replace the AI imagery */}
      </div>
    </div>
  )
}

export default Header

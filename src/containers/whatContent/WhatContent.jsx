import React from 'react'
import './whatContent.css'
import { Feature } from '../../components'

// I have replaced the word 'gpt' with 'content' in my following of this project.
const WhatContent = () => {
  return (
    <div className='content__whatcontent section__margin' id="whcontent">
      <div className='content__whatcontent-feature'>
          <Feature title= "Where is Summerville?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      </div>
      <div className='content__whatcontent-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Explore the city</p>
      </div>
      <div className='content-whatcontent-container'>
        <Feature title= "need filler title here1" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>        
        <Feature title= "need filler title here2" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
        <Feature title= "need filler title here3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>      
      </div>
    </div>
  )
}

export default WhatContent

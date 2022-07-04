import React from 'react';
import './header.css';
import HeaderPic from '../../assets/header.png'

const Header = () => {
  return (
    <div className='cc__header section__padding' id='home'>
      <div className='cc__header-content'>
        <h1 className='gradient_text1'>Be greats programmer with us</h1>
        <p>Starts from</p>
        
        <div className='cc__header-content__input'>
          <p className='left'>$50</p>
          <p className='right'>$9/Month</p>
          <button type='button'>Register</button>
        </div>

        
      </div>
      <div className='cc__header-image'>
        <img src={HeaderPic} alt='header'/>
      </div>
    </div>
  )
}

export default Header
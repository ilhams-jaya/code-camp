import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='cc__footer section__padding' id='contact'>
      <div className='cc__footer-container'>
        <div className='cc__footer-container_link'>
          <div className='link-company'>
              <h3>Company</h3>
              <p><a href='#terms'>Terms & Conditions</a></p>
              <p><a href='#privacy'>Privacy Policy</a></p>
              <p><a href='#contact'>Contact</a></p>
          </div>
          <div className='link-socmed'>
              <h3>Social Media</h3>
              <p><a href='#ig'>Instagram</a></p>
              <p><a href='#yt'>Youtube</a></p>
              <p><a href='#fb'>Facebook</a></p>
          </div>
          <div className='link-contact'>
              <h3>Contact</h3>
              <p>Codecamp@gmail.com</p>
              <p>085-132567</p>
              <p>Jl. Nasional no.17 Yogyakarta</p>
          </div>
        </div>
      </div>
      <h3 className='copyright'>© 2022 Code Camp. All rights reserved.</h3>
    </div>
  )
}

export default Footer
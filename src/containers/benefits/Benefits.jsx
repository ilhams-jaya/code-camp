import React from 'react';
import './benefits.css';
import Benefit from '../../assets/benefit.png';
import Garis from '../../assets/Garis.png';

const Benefits = () => {
  return (
    <div className='cc__benefit' id='benefit'>
      <div className='cc__benefit-container section__margin'>
        <h1 className='gradient_text2'>The benefits you will get when you join the code camp</h1>
        <div className='cc__benefit-container_content'>
          <div className='groupA'>
            <img src={Benefit} alt='illustration'/>
            <div className='cc__benefit-container_content-text'>
              <img src={Garis} alt='garis'/>
              <h3>Increase relationships in the IT field</h3>
              <p>By following this code camp course you will get a lot of relationships.</p>
            </div>
          </div>
          <div className='groupB'>
            <div className='cc__benefit-container_content-text'>
              <img src={Garis} alt='garis'/>
              <h3>Experience in real project</h3>
              <p>Gain various experiences by participating in various real projects.</p>
            </div>
            <div className='cc__benefit-container_content-text'>
              <img src={Garis} alt='garis'/>
              <h3>Improve your coding skills</h3>
              <p>Feel the improvement of your coding skills every day.</p>
            </div>
            <div className='cc__benefit-container_content-text'>
              <img src={Garis} alt='garis'/>
              <h3>Good time management skills</h3>
              <p>By following the code camp you will be trained in time management.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
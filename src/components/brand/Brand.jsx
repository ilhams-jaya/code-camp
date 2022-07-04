import React from 'react';
import './brand.css';
import './import.js'
import { github, linkedin, stackoverflow, vscode } from './import.js';

const Brand = () => {
  return (
    
    <div className='cc__brand section__padding'>
      <div className='cc__brand-text'>
        <p>Brand Partner</p>
      </div>
      <div className='cc__brand-logo'>
        <div>
          <img src={linkedin} alt='linkedin'/>
        </div>
        <div>
          <img src={github} alt='github'/>
        </div>
        <div>
          <img src={stackoverflow} alt='stack'/>
        </div>
        <div>
          <img src={vscode} alt='vscode'/>
        </div>
      </div>
    </div>
  )
}

export default Brand
import React from 'react';
import './courses.css';
import { htmlcss, js, java, php } from './import';

const Courses = () => {
  return (
    <div className='cc__courses' id='course'>
      <div className='cc__courses-content'>
        <div className='cc__courses-content_title'>
          <h1>The courses we provide</h1>
        </div>
        <div className='cc__courses-content_course section__margin'>
          <div className='cc__courses-content_course-content'>
            <img src={htmlcss} alt='htmlcss'/>
            <div className='cc__courses-content_course-content-text'>
              <h3 className='title'>HTML & CSS Course</h3>
              <p className='desc'>2 months of intensive learning through videos and online meetings</p>
            </div>
          </div>
          <div className='cc__courses-content_course-content'>
            <img src={java} alt='java'/>
            <div className='cc__courses-content_course-content-text'>
              <h3 className='title'>JAVA Course</h3>
              <p className='desc'>2 months of intensive learning through videos and online meetings</p>
            </div>
          </div>
          <div className='cc__courses-content_course-content'>
            <img src={js} alt='js'/>
            <div className='cc__courses-content_course-content-text'>
              <h3 className='title'>JavaScript Course</h3>
              <p className='desc'>2 months of intensive learning through videos and online meetings</p>
            </div>
          </div>
          <div className='cc__courses-content_course-content'>
            <img src={php} alt='php'/>
            <div className='cc__courses-content_course-content-text'>
              <h3 className='title'>PHP Course</h3>
              <p className='desc'>2 months of intensive learning through videos and online meetings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
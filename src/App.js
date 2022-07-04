import React from 'react';
import { Courses, Footer, Header, Benefits } from './containers';
import { Brand, CTA, Navbar } from './components';


const App = () => {
  return (
    <div className='App gradient_bg'>
      <div className='main'>
        <Navbar/>
        <Header/>
        <Brand/>
      </div>
      <Courses/>
      <Benefits/>
      <CTA/>
      <Footer/>          
    </div>
  )
}

export default App
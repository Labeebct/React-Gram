import React from 'react'
import './about.css'
import Topnav from '../COMP/topnav'
import Left from '../COMP/left'
import AboutContent from '../CLICK COMP/aboutcontent'


function About() {
  return (
    <>
    <Topnav />
    <div className="about-wrapper">
      <Left />
      <AboutContent />
    </div>
    </>
  )
}

export default About
import React from 'react'
import './explore.css'
import Topnav from '../COMP/topnav'
import Left from '../COMP/left'
import Exploreportion from '../CLICK COMP/exploreportion'

export default function Explore() {
  return (
    <>
   <Topnav />
   <div className="explore-wrapper">
      <Left />
      <Exploreportion/>
   </div>
   </>
  )
}

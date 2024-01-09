import React from 'react'
import './shorts.css'
import Topnav from '../COMP/topnav'
import Left from '../COMP/left'
import Shortsright from '../CLICK COMP/shortsright'

export default function Shorts() {

  return (
    <>
    <Topnav/>
    <div className="shorts-wrapper">
        <Left />
        <Shortsright />
    </div>
    </>
  )
}

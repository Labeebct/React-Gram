import React from 'react'
import './peaple.css'

export default function People(props) {

  const {userPic,userName,userSource}=props
  return (
    <div className="people">
          <div className="people-pic"><img src={userPic} className='peaple-know-pic'/></div>
          <div className="about-people">
          <div className="people-id">{userName}</div>
          <div className="people-source">{userSource}</div>
          </div>
          <div className="follow-cont"><button className='follow-btn'>Follow</button></div>
    </div>
  )
}

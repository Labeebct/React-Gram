import React from 'react'
import './chatright.css'

export default function Chatright() {
  return (
    <div className='chatright-wrapper'>
        <div className='logo-circle'><img src="Assets/messenger.png" className='messenger-logo-png'/></div>
        <h3>Your messages</h3>
        <p>Send private photos and messages to a friend or group.</p>
        <div className='btn-div'><button className='send-btn'>Send Message</button></div>
    </div>
  )
}

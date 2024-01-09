import React from 'react'
import './chat.css'
import Left from '../COMP/left'
import Topnav from '../COMP/topnav'
import Chatleft from './chatleft'
import Chatright from './chatright'


export default function Chat() {
  return (
    <>
    <Topnav />
    <div className="chat-wrapper">
    <Left/>
    <Chatleft />
    <Chatright/>
    </div>
    </>
  )
}

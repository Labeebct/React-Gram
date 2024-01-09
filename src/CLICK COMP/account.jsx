import React from 'react'
import './account.css'
import Topnav from '../COMP/topnav'
import Left from '../COMP/left'
import Myprofile from './myprofile'

export default function Account() {
  return (
    <>
    <Topnav />
    <div className='account-page'>
    <Left />
    <Myprofile />
    </div>
    </>
    
  )
}

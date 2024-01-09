import React from 'react'
import "./right.css"
import People from './people'


let userArray = [
  {
    userpic:'Assets/afaz.png',
    userid:'Afaz ct',
    usersource:'Suggested for you',
   },
  {
  userpic:'Assets/aseem.png',
  userid:'Aseem Shanib',
  usersource:'From Contact',
 },
  {
  userpic:'Assets/shamil.png',
  userid:'Shamil L',
  usersource:'From Contact',
 },
  {
  userpic:'Assets/fawas.png',
  userid:'Fawas vp',
  usersource:'Suggested for you',
 },
  {
  userpic:'Assets/aslam.png',
  userid:'Aslam Azy',
  usersource:'From Contact',
 },
  {
  userpic:'Assets/arjun.png',
  userid:'Arjun trails',
  usersource:'Follows You',
 },
  {
  userpic:'Assets/iyas.png',
  userid:'Iyas Broto',
  usersource:'Suggested for you',
 },
  {
  userpic:'Assets/shahid.png',
  userid:'Shahid Kv',
  usersource:'From contact',
 },
  {
  userpic:'Assets/muju.png',
  userid:'Mujthaba',
  usersource:'Suggested for you',
 },
  {
  userpic:'Assets/hasifali.png',
  userid:'Hasifali ct',
  usersource:'From contact',
 }
 ,
 {
  userpic:'Assets/midhun.png',
  userid:'midhhxh',
  usersource:'Follows You',
 },
  {
  userpic:'Assets/bazil2.png',
  userid:'Muhammed Bazil',
  usersource:'From Contact',
 }
]

export default function right({homeRight}) {
  return (
    <div className={`right-wrapper ${homeRight}`}>
      <div className="right-top">People you may Know</div>
        <div className="right-bottom">
          {
          userArray.map((obj)=>{
            return <People userPic={obj.userpic} userName={obj.userid} userSource={obj.usersource} />
          })
          }
      </div>
    </div>
  )
}

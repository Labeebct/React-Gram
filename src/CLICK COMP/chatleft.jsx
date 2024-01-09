import React from 'react'
import './chatleft.css'
import Chatuser from './chatuser';
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


let chatdetails = [
    {
      chatuserimg:'Assets/afaz.png',
      chatusername:'Afaz ct',
      chatusermessage:'Haa.. ok🙌',
      chattime:'1 h'
    },
    {
      chatuserimg:'Assets/shamil.png',
      chatusername:'Shamil L',
      chatusermessage:'Send a reel',
      chattime:'2 h'
    },
    {
      chatuserimg:'Assets/aseem.png',
      chatusername:'Aseem Shanib',
      chatusermessage:'You:Aa🥲',
      chattime:'5 h'
    },
    {
      chatuserimg:'Assets/shahid.png',
      chatusername:'Shahid Kv',
      chatusermessage:'Send a reel',
      chattime:'12 h'
    },
    {
      chatuserimg:'Assets/iyas.png',
      chatusername:'Iyas Broto',
      chatusermessage:'Send you a photo',
      chattime:'18 h'
    },
    {
      chatuserimg:'Assets/aslam.png',
      chatusername:'Aslam Azy',
      chatusermessage:'Eppam?🧐',
      chattime:'1 day'
    },
    {
      chatuserimg:'Assets/fawas.png',
      chatusername:'Fawas vp',
      chatusermessage:'You:Done👍',
      chattime:'2 day'
    },
    {
      chatuserimg:'Assets/muju.png',
      chatusername:'Mujthaba',
      chatusermessage:'You:Hmmm',
      chattime:'1 w'
    }
  ]

export default function Chatleft() {
  return (
    <div className="chatleft-wrapper">
        <div className="chatleft-top">
         <div className="chatleft-top-user-name-div">
          <div className="top-user-name">Labeeb ct <KeyboardArrowDownIcon className='arrow-down-icon'/></div>
          <div className="top-right-note-iicon"><EditNoteIcon fontSize='inherit' /></div>
         </div>
         <div className="primary-general-private">
          <div className='primart-text'>Primary</div>
          <div>Private</div>
          <div>General</div>
         </div>
        </div>
        <div className="chatleft-botttom">
       {
        chatdetails.map((data)=>{
            return <Chatuser Userimg={data.chatuserimg} Username={data.chatusername} Usermessage={data.chatusermessage} Usertime={data.chattime} />
        })
    }
        </div>
    </div>
  )
}

import React from 'react'
import LocalSeeIcon from '@mui/icons-material/LocalSee';


export default function Chatuser(props) {
    const {Userimg , Username , Usermessage , Usertime}=props
  return (
    <div className="chat-user">
            <div  className='chat-user-img-div'><img src={Userimg} className='chat-user-img' /></div>
            <div className='chatuser-name-message-div'>
                <div className="chat-user-name">{Username}</div>
                <div className="chat-user-message">{Usermessage}. <span>{Usertime}</span></div>
            </div>
            <div className="chat-end-camera-icon"><LocalSeeIcon fontSize='inherit' /></div>
         </div>
  )
}

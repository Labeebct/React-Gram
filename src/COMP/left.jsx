import React from 'react'
import './left.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HistoryIcon from '@mui/icons-material/History';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


export default function Left() {
  const navigate = useNavigate()

  function tologinpage(){
    navigate('./login')
  }

  return (
    <div className="left-wrapper">
        <ul className='left-contents'>
          <li><Link className='left-links' to='/home'><span className='left-icons-size-div'><RssFeedIcon className='left-icons' fontSize='inherit' /></span><span className='left-text'>Home</span></Link></li>
          <li><Link className='left-links' to='/chat'><span className='left-icons-size-div'><ChatIcon className='left-icons' fontSize='inherit' /></span><span className='left-text'>Chats</span></Link></li>
          <li><Link className='left-links' to='/notification'><span className='left-icons-size-div'><FavoriteBorderIcon className='left-icons' fontSize='inherit' /></span><span className='left-text'>Notification</span></Link></li>
          <li><Link className='left-links' to='/groups'><span className='left-icons-size-div'><GroupIcon className='left-icons' fontSize='inherit' /></span><span className='left-text'>Groups</span></Link></li>
          <li><Link className='left-links' to='/shorts'><span className='left-icons-size-div'><PlayCircleIcon className='left-icons' fontSize='inherit' /></span><span className='left-text'>Shorts</span></Link></li>          
          <li><Link className='left-links' to='/explore'><span className='left-icons-size-div'><ExploreIcon className='left-icons' fontSize='inherit' /></span><span className='left-text'>Explore</span></Link></li>
          <li><Link className='left-links' to='/account'><img src="Assets/labio.jpg" className='labio-left-profile' /><span className='left-text profile-text'>Profile</span></Link></li>
        </ul>
        <hr className='left-hr' />
        <ul className='left-footer'>
          <li><BookmarkBorderIcon fontSize='inherit' /><a href=""><span>Saved</span></a></li>
          <li><HistoryIcon fontSize='inherit' /><a href=""><span>Activity</span></a></li>
        </ul>
        <div className="showMore-cont"><button className='showMore-btn' onClick={tologinpage} >Log Out<span className='log-out-icon'><PowerSettingsNewIcon  fontSize='inherit' /></span></button></div>
    </div>
  )
}

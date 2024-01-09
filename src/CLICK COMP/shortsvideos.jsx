import React from 'react'
import './shortsvideos.css'
import { useState,useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Shortsvideos(props) {

  const {Shortsvideo ,Shortslikes , Shortscomments , Shortsshare , Shortsuserimg} = props
  let likesNum = Number(Shortslikes)
  let [like , setlikes]=useState(likesNum);
  let [save , setSave]=useState(false)

  function likeShort(){
    if(like>Shortslikes){
      setlikes(like-1)
    }
    else{
      setlikes(like+1)
    }
  }

  function saveShort(){
    if(save==false){
    setSave(save=true)
    }
    else{
      setSave(save=false)
    }
  }
  
  return (
    <div className="short-video-frame">
        <div className="short-video-left">
         <video src={Shortsvideo} className='shorts-videos' controls>
         </video>
        </div>
        <div className="short-video-right">
          <ul>
            <li>
              <button onClick={likeShort} className='short-video-icon'>
              {like > Shortslikes ? (<FavoriteIcon style={{color:'red'}} fontSize='inherit'/>) : (<FavoriteBorderIcon fontSize='inherit' />)}
              </button>
            <span className='short-video-icon-below-text'>{like}</span></li>
            <li><button className='short-video-icon'><ChatBubbleOutlineIcon fontSize='inherit' /></button><span className='short-video-icon-below-text'>{Shortscomments}</span></li>
            <li><button className='short-video-icon'><ShareIcon fontSize='inherit' /></button><span className='short-video-icon-below-text'>{Shortsshare}</span></li>
            <li>
              <button onClick={saveShort} className='short-video-icon'>
                { 
                save ? (<BookmarkIcon fontSize='inherit' />):(<BookmarkBorderIcon fontSize='inherit' />)
                }
              </button>
            <span className='short-video-icon-below-text'></span></li>
            <li><button className='short-video-icon'><img src={Shortsuserimg} className='shorts-user-img'/></button><span className='short-video-icon-below-text'></span></li>
          </ul>
        </div>
    </div>
  )
}

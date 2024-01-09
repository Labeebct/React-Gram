import React from 'react'
import './post.css'
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



export default function Post(props) {

const {userDp , userName , userPost ,  userLocation , postLikeCount , postCommentCount , postShareCount} = props;

let postlikenum = Number(postLikeCount)

let [likes , setLikes]=useState(postlikenum)

let [postsaveicon , setPostsaveicon]=useState(false)

function likeThepost(){
  if(likes > postLikeCount){

    setLikes(likes - 1)
  }
  else{

    setLikes(likes + 1)

  }
}


function saveThepost(){
  if(postsaveicon===false){

    setPostsaveicon(postsaveicon = true)
    
  }
  else{
    setPostsaveicon(postsaveicon=false)
  }
}

  return (
    <div className="frame">
    <div className="top">
      <img src={userDp}  className='labio-img' />
      <div className="user-nameandlocation-div">
      <div className="user-Name">{userName}</div>
      <div className="user-Location">{userLocation}</div>
      </div>
    </div>
    <div className="centre">
      <img src={userPost} className='user-Post' />
    </div>
    <div className="bottom">
      <ul className='like-ul'>
        <li>
            <button className='post-likecommentshare-icon-btn' onClick={likeThepost}>
              {
                likes > postLikeCount ? (<FavoriteIcon style={{color:'red'}} fontSize="inherit" />) : (<FavoriteBorderIcon fontSize="inherit"/>)
              }
            </button>
          <span className='postLike-count'>{likes}</span></li>
        <li><button className='post-likecommentshare-icon-btn'><ChatBubbleOutlineIcon fontSize="inherit"  /></button><span className='postLike-count'>{postCommentCount}</span></li>
        <li><button className='post-likecommentshare-icon-btn'><SendIcon  fontSize="inherit" /></button><span className='postLike-count'>{postShareCount}</span></li>
        <li>
              <button className='postSaveBtn' onClick={saveThepost}>
              { 
              postsaveicon ?  (<BookmarkIcon fontSize="inherit" className='save-post-icon' />)  : (<BookmarkBorderIcon fontSize="inherit" className='save-post-icon'/>)
              }      
              </button>
        </li>
      </ul>
      <div className="likes-count">
        <div className='liked-people-img-cont'>
          <img src="Assets/afaz.png" alt="" className='liked-people-img likeimg1' />
          <img src="Assets/shamil.png" alt="" className='liked-people-img likeimg2' />
          <img src="Assets/aseem.png" alt="" className='liked-people-img likeimg3' />
          <img src="Assets/shahid.png" alt="" className='liked-people-img likeimg4' />
         </div>
         <div className='like-count-text'>
         {likes} Others liked.
         </div>
        </div>
    </div>
    </div>
  )
}

import React from 'react'
import './center.css'
import Post from './post'

const userPost=[
  {
    userdp:'Assets/afaz.png',
    username:'Afaz ct',
    userpost:'Assets/afaz-post.png',
    postlikecount:252,
    postcommentcount:32,
    postsharecount:14,
    location:'Cochin Airport',
  },
   {
    userdp:'Assets/Shamil.png',
    username:'Shamil L',
    userpost:'Assets/shamil-post.png',
    postlikecount:523,
    postcommentcount:132,
    postsharecount:31,
    location:'Kakkadampoyil Kerala'
  },
  {
    userdp:'Assets/aseem.png',
    username:'Aseem Shanib',
    userpost:'Assets/shanib-post.png',
    postlikecount:152,
    postcommentcount:32,
    postsharecount:14,
    location:'Kochi India'
  },
  {
    userdp:'Assets/labio.jpg',
    username:'Labeeb Ct',
    userpost:'Assets/labio-post.jpg',
    postlikecount:452,
    postcommentcount:72,
    postsharecount:34,
    location:'KL-84 Kondotty'
  },
  {
    userdp:'Assets/hasifali.png',
    username:'Hasifali ct',
    userpost:'Assets/hasifali-post.png',
    postlikecount:329,
    postcommentcount:62,
    postsharecount:34,
    location:'Tamilnadu India'
  },
  {
    userdp:'Assets/shahid.png',
    username:'Shahid',
    userpost:'Assets/shahid-post.png',
    postlikecount:452,
    postcommentcount:62,
    postsharecount:34,
    location:'Valparai'
  }
]

export default function center({homeCentre}) {
  return (
    <div className={`centre-wrapper ${homeCentre}`}>
       {
         userPost.map((obj)=>{
         return <Post userDp={obj.userdp} userName={obj.username} userPost={obj.userpost} userLocation={obj.location} postLikeCount={obj.postlikecount} postCommentCount={obj.postcommentcount} postShareCount={obj.postsharecount}  />
        })
       }
    </div>
  )
}

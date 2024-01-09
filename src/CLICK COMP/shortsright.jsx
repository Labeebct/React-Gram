import React from 'react'
import './shortsright.css'
import Shortsvideos from '../CLICK COMP/shortsvideos'

let shortsarray = [
  {
    shortsvideo:'Assets/shorts/shorts6.mp4',
    shortslikes:'738',
    shortscomments:'232',
    shortsshare:'34k',
    shortsuserimg:'Assets/afaz.png'
  },
  {
    shortsvideo:'Assets/shorts/shorts2.mp4',
    shortslikes:'138',
    shortscomments:'632',
    shortsshare:'12k',
    shortsuserimg:'Assets/aseem.png'
  },
  {
    shortsvideo:'Assets/shorts/shorts3.mp4',
    shortslikes:'238',
    shortscomments:'123',
    shortsshare:'14k',
    shortsuserimg:'Assets/shamil.png'
  },
  {
    shortsvideo:'Assets/shorts/shorts4.mp4',
    shortslikes:'128',
    shortscomments:'132',
    shortsshare:'423',
    shortsuserimg:'Assets/shahid.png'
  },
  {
    shortsvideo:'Assets/shorts/shorts5.mp4',
    shortslikes:'88',
    shortscomments:'532',
    shortsshare:'4k',
    shortsuserimg:'Assets/iyas.png'
  },
  {
    shortsvideo:'Assets/shorts/shorts1.mp4',
    shortslikes:'2212',
    shortscomments:'323',
    shortsshare:'223k',
    shortsuserimg:'Assets/fawas.png'
  },
]

export default function Shortsright() {
  return (
    <div className="shorts-right-wrapper">
       <div className="shorts-right-frame">
        {
        shortsarray.map((item)=>{
         return <Shortsvideos Shortsvideo={item.shortsvideo} Shortslikes={item.shortslikes} Shortscomments={item.shortscomments} Shortsshare={item.shortsshare} Shortsuserimg={item.shortsuserimg} />
        })
        }
       </div>
    </div>
  )
}

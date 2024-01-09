import React from 'react'
import './myprofile.css'

export default function Myprofile() {
  return (
    <div className="myprofile-wrapper">
        <div className="myprofile-frame">
            <div className="myprofile-top">
                <div className="myprofile-top-left"><img src="/Assets/myprofilepics/dp.jpg" className='myprofile-dp' /></div>
                <div className="myprofile-top-right">
                    <div className="top-right-div1">
                        <h4>Labeeb_ct</h4>
                        <button>Edit Profile</button>
                        <button>Archieve</button>
                        <button>Ad tools</button>
                     </div>
                    <div className="top-right-div2">
                        <span>6 posts</span>
                        <span>730 followers</span>
                        <span>250 following</span>
                    </div>
                    <div className="top-right-div3">
                        <h2>labeeb__.</h2>
                    </div>
                    <div className="top-right-div4">
                        <ul>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                        </ul>
                    </div>
                    <div className="top-right-div5">Naah...Not ur type📌</div>
                    <div className="top-right-div6">58 accounts reached in the last 30 days.<span>View Insights</span></div>
                </div>
            </div>
            <div className="myprofile-centre">
                <div className="story-highlights-pics"><img src="/Assets/myprofilepics/h1.png" className='storyHighlight-img' /><div>MT-15🖤</div></div>
                <div className="story-highlights-pics"><img src="/Assets/myprofilepics/p3.jpg" className='storyHighlight-img' /><div>WEE👾</div></div>
                <div className="story-highlights-pics"><img src="/Assets/myprofilepics/h3.jpg" className='storyHighlight-img' /><div>KASHMIR☃️</div></div>
                <div className="story-highlights-pics"><img src="/Assets/myprofilepics/h4.jpg" className='storyHighlight-img' /><div>SOME💓</div></div>
                <div className="story-highlights-pics"><img src="/Assets/myprofilepics/h5.jpg" className='storyHighlight-img' /><div>MADIN🫂</div></div>
                <div className="story-highlights-pics"><img src="/Assets/myprofilepics/h6.jpg" className='storyHighlight-img' /><div>GHSS🙌</div></div>
            </div>
            <hr className='myprofile-hr' />
            <div className="myprofile-bottom">
                <div className="myprofile-posts"><img src="/Assets/myprofilepics/p1.jpg" className='myprofile-post-img'/></div>
                <div className="myprofile-posts"><img src="/Assets/myprofilepics/p2.jpg" className='myprofile-post-img'/></div>
                <div className="myprofile-posts"><img src="/Assets/myprofilepics/p3.jpg" className='myprofile-post-img'/></div>
                <div className="myprofile-posts"><img src="/Assets/myprofilepics/p4.jpg" className='myprofile-post-img'/></div>
                <div className="myprofile-posts"><img src="/Assets/myprofilepics/p5.jpg" className='myprofile-post-img'/></div>
                <div className="myprofile-posts"><img src="/Assets/myprofilepics/p6.jpg" className='myprofile-post-img'/></div>
            </div>
        </div>
    </div>
  )
}

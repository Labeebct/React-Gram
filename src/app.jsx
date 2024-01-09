import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './SUB/home'
import Account from './CLICK COMP/account'
import About from './CLICK COMP/about'
import Chat from './CLICK COMP/chat'
import Explore from './CLICK COMP/explore'
import Shorts from './CLICK COMP/shorts'
import Notification from './CLICK COMP/notification'
import Groups from './CLICK COMP/groups'
import Loginpage from './SUB/loginpage'




export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/about' element={<About />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/login' element={<Loginpage />} />    
    </Routes>
    </>
  )
}

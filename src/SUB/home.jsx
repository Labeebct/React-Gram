import React from 'react';
import "./home.css"
import Topnav from '../COMP/topnav';
import Left from '../COMP/left'
import Centre from '../COMP/center'
import Right from '../COMP/right'

const Home = () => {
  return (
    <>
    <Topnav />
  <div className='home'>
    <Left />
    <Centre homeCentre={'home-centre'} />
    <Right homeRight={'home-right'} />
  </div>
  </>
  );
};

export default Home;
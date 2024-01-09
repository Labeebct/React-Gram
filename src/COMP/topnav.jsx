import "./topnav.css" 
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Topnav = () => {
  return (
    <div className='top-nav'>
        <div className='labio-text'>LABIO</div>
        <div className='search-div'><input type='text' placeholder='Search Box' className='search-input'></input><span className="top-nav-search-icon"><SearchIcon fontSize="inherit" /></span></div>
        <div className="ancher-links">
                <ul className='ul-cont'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/account'>Account</Link></li>
                <li><Link to='/about'>About</Link></li>
                </ul>
        </div>
    </div>
  );
};

export default Topnav;
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.png';
import logoutIcon from '../../assets/images/logout.png';
import * as actions from '../../store/action';
import './header.scss';

const Header = () => {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actions.logout());
  }

  return (
    <div className='header'>
       <Link to="/dashboard" className='logo-container'>
            <div style={{display: "flex", alignItems: "center"}}>
              <img src={homeIcon} alt='Logo' />
              <div className='title'>Task Management</div>
            </div>
       </Link>

       <div className='options'>
            <Link className='option' onClick={handleLogout} to="">
              <img src={logoutIcon} style={{height: '50px'}} alt="logout" />
            </Link>
       </div>
    </div>
  )
};

export default Header;
import React from 'react';
import messages from './images/Messages.svg';
import notifications from './images/Notifications.svg';
import user from './images/User.svg';
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__inner">
        <div>
          <h2 className="Header__title">Education</h2>
        </div>
        <div>
          <div className="Header__img-wrapper">
            <img src={messages} alt=""/>
            <div className="red-circle"></div>
          </div>
          <div className="Header__img-wrapper">
            <img src={notifications} alt=""/>
            <div className="red-circle"></div>
          </div>
          <img src={user} alt="" className='user-icon'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
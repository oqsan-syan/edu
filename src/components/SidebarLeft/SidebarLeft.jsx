import React from 'react';
import "./SidebarLeft.scss";
import logo from './images/Logo_AlanTuring.png';
import eduIcon from './images/Education.svg';
import calendarIcon from './images/Calendar.svg';

const SidebarLeft = () => {
  return (
    <div className="SidebarLeft">
      <img src={logo} alt="logo"/>
      <img src={eduIcon} alt="education"/>
      <img src={calendarIcon} alt="calendar"/>
    </div>
  );
};

export default SidebarLeft;
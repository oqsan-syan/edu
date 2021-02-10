import React from 'react';
import './SidebarRight.scss';
import fileIcon from './images/file.svg';

const SidebarRightFiles = ({file}) => {
  return (
    <div className='file'>
      <img src={fileIcon} alt="" className="file__icon"/>
      <h6 className="file__title">{file.title}</h6>
    </div>
  );
};

export default SidebarRightFiles;
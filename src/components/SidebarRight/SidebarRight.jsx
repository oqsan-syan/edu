import React from 'react';
import "./SidebarRight.scss"; 
import arrowLeft from './images/arrow_back.svg';
import search from './images/search.svg';
import SidebarRightFiles from './SidebarRightFiles';
import { useSelector } from "react-redux";

const SidebarRight = () => {

  const filesState = useSelector((state) => state.files.filesState);
  const pathTitle = useSelector((state) => state.files.pathTitle);
  const filesArr = useSelector((state) => state.files.filesArr);
  
  return (
    <>
      {filesState ? (
      <div className="SidebarRight--files">
        <div className="SidebarRight__header">
          <h3 className="SidebarRight__title">
          {pathTitle}
          </h3>
          <img className="arrow" src={arrowLeft} alt="arrow"/>
        </div>
        <div className="SidebarRight__search">
          <label htmlFor="search"><img src={search} alt=""/></label>
          <input type="text" placeholder="Search..." />
        </div>
        <div className='files'>
        {filesArr.map(file => {
          return <SidebarRightFiles file={file} />
        })}
        </div>
      </div>
    ): (
      <div className="SidebarRight">
        <img src={arrowLeft} alt="arrow"/>
      </div>
    )}
    </>
  );
};

export default SidebarRight;
import React, { useState } from 'react';
import openIcon from './images/Open.svg';
import closeIcon from './images/Close.svg';
import materialsIcon from './images/Learning Material.svg';
import './Course.scss';
import Lessons from './Lessons';

const Course = ({title, lessons}) => {
  const [lessonsState, setlessonsState] = useState(false);
  
  let lessonsArr = [];
  let imgSrc = openIcon;

  const onClickHandler = () => {
    setlessonsState(!lessonsState);
  }

  if(lessonsState) {
    lessonsArr = [...lessons];
    imgSrc=closeIcon;
  }

  return (
    <div className="Course">
      <div className="Course__inner">
        <div>
          <h5 className="Course__sup-title sup-title">Course</h5>
          <h3 className="Course__title title">{title}</h3>
        </div>
        <div className="Course__icons">
          <img src={imgSrc} alt="" onClick={() => onClickHandler()} />
          <img src={materialsIcon} alt="" />
        </div>
      </div>
      {lessonsState ? (
        <div className='lessons'>
        {lessonsArr.map((lesson, index) => {
          return <Lessons title={lesson.title} key={lesson.num} num={lesson.num} id={index}/>
        })}
      </div>
      ):<div></div>}
    </div>
  );
};

export default Course;
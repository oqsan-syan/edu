import React, { useState, useEffect } from 'react';
import openIcon from './images/Open.svg';
import closeIcon from './images/Close.svg';
import './Course.css';
import Lessons from './Lessons';
import { useSelector, useDispatch } from "react-redux";
import {setFilesArr, setFilesState, setPathTitle} from '../../redux/actions/filesActions';

const Course = ({title, lessons, course}) => {
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

  const dispatch = useDispatch();

  const courses = useSelector((state) => state.files.courses);
  const filesArr = useSelector((state) => state.files.filesArr);
  const pathTitle = useSelector((state) => state.files.pathTitle);
  const filesState = useSelector((state) => state.files.filesState);

  let arr = filesArr;

  useEffect(() => {
    dispatch(setFilesArr(arr));
  });

  const onIconClick = () => {
    course.fileState = !course.fileState;
    dispatch(setPathTitle(title));
    if(course.fileState === false && filesState === false) {
      dispatch(setFilesState(true))
    } else if (course.fileState) {
      dispatch(setFilesState(true));
    } else if (course.fileState === false) {
      dispatch(setFilesState(false));
    }
  }

  courses.forEach(course => {
    if(course.fileState) {
      arr = course.files; 
    }
  });

  courses.forEach(course => {
      if(course.title !== pathTitle) {
        course.fileState = false;
      }
  });

  return (
    <div className="Course">
      <div className="Course__inner">
        <div>
          <h5 className="Course__sup-title sup-title">Course</h5>
          <h3 className="Course__title title">{title}</h3>
        </div>
        <div className="Course__icons">
          <img src={imgSrc} alt="" onClick={() => onClickHandler()} />
          <svg className={course.fileState ? 'bg-dark' : ''} onClick={() => onIconClick()} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#E5EFF6"/>
          <path d="M7 17H25V15H7V17ZM7 21H25V19H7V21ZM7 11V13H25V11H7Z" fill="#A5BBCB"/>
          </svg>
        </div>
      </div>
      {lessonsState && (
        <div className='lessons'>
        {lessonsArr.map((lesson, index) => {
          return <Lessons lesson={lesson} title={lesson.title} key={lesson.num} num={lesson.num} id={index}/>
        })}
      </div>
      )}
    </div>
  );
};

export default Course;
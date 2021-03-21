import React  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setFilesState, setPathTitle, setFilesArr } from '../../redux/actions/filesActions';
import './Path.css';

const Path = () => {
  const dispatch = useDispatch();
  const title = "C# Programming";
  let classes = ['material'];

  const filesState = useSelector(state => state.files.filesState);
  const courses = useSelector(state => state.files.courses);
  const pathTitle = useSelector(state => state.files.pathTitle);
  
  const files = [];

  courses.forEach ((course) => {
    files.push(...[...course.files])
  }); 

  const onClickHandler = () => {
    dispatch(setFilesState(!filesState));
    dispatch(setPathTitle(title)); 
    dispatch(setFilesArr(files));
  }

  if(filesState) {
    classes.pop('material');
    classes.push('material--hover');
  }

  courses.forEach(course => {
    if(course.fileState === true) {
      classes.pop('material--hover');
    }
    course.lessons.forEach(lesson => {
      if(lesson.lessonState === true) {
        classes.pop('material--hover');
      }
    })
  })
  
  return (           
    <div className="Path">
        <div className="Path__wrapper">
          <div>
            <h5 className="Path__sup-title sup-title">Path</h5>
            <h3 className="Path__title title">{title}</h3>
          </div>
          <div className="Path__icon" onClick={() => onClickHandler()}>
          <svg className={classes} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#E5EFF6"/>
            <path d="M7 17H25V15H7V17ZM7 21H25V19H7V21ZM7 11V13H25V11H7Z" fill="#A5BBCB"/>
          </svg>
          </div>
        </div>
    </div> 
  );

}

export default Path;
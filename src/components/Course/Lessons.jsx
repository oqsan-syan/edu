import React, { useEffect } from 'react';
import "./Course.scss";
import { useSelector, useDispatch } from "react-redux";
import {setFilesArr, setFilesState, setPathTitle} from '../../redux/actions/filesActions';


const Lessons = ({title, num}) => {
  const dispatch = useDispatch();

  // const filesState = useSelector((state) => state.files.filesState);
  const courses = useSelector((state) => state.files.courses);
  const filesArr = useSelector((state) => state.files.filesArr);
  const pathTitle = useSelector((state) => state.files.pathTitle);

  let arr = filesArr;
  let classes = [];
  let lessonClasses = ["lesson"]

  courses.forEach(course => {
    course.lessons.forEach(lesson => {

      if(lesson.title === pathTitle) {
        arr = course.files; 
      }
    })
  })

  useEffect(() => {
    dispatch(setFilesArr(arr));
  });

  const onLessonHover = () => {
    
    lessonClasses.unshift('hover')
    console.log(lessonClasses)
  }

  const onIconClick = () => {
    dispatch(setPathTitle(window.event.target.parentElement.previousSibling.textContent.slice(10)));
    window.event.target.parentElement.classList.toggle('bg-dark');
    dispatch(setFilesState(true));
  }

  return (
    <div className={lessonClasses} onMouseOver={() => onLessonHover()}>
      <h4 className="lesson__title"><span>Lesson {num}: </span>{title}</h4>
      <svg className={classes} onClick={() => onIconClick()} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#E5EFF6"/>
      <path d="M7 17H25V15H7V17ZM7 21H25V19H7V21ZM7 11V13H25V11H7Z" fill="#A5BBCB"/>
      </svg>
    </div>
  );
};

export default Lessons;
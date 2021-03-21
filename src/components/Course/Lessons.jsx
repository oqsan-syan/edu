import React from 'react';
import "./Course.css";

const Lessons = ({title, num, lesson}) => {
  return (
    <div className="lesson" >
      <h4 className="lesson__title"><span>Lesson {num}: </span>{title}</h4>
      <svg className={lesson.lessonState ? 'bg-dark' : ''} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#E5EFF6"/>
      <path d="M7 17H25V15H7V17ZM7 21H25V19H7V21ZM7 11V13H25V11H7Z" fill="#A5BBCB"/>
      </svg>
    </div>
  );
};

export default Lessons;
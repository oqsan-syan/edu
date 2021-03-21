import React from 'react';
import Course from '../Course/Course';
import Path from '../Path/Path';
import './Courses.css';
import { useSelector} from "react-redux";

const Courses = () => {

  const courses = useSelector((state) => state.files.courses);

  return (
    <div className="Courses">
      <div className="Courses__inner">
        <Path />
        {
          courses.map(course => {
            return <Course title={course.title} key={course.id} lessons={course.lessons} course={course} />
          })
        }
      </div>
    </div>
  )
}

export default Courses;
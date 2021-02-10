import React, {Component} from 'react';
import Course from '../Course/Course';
import Path from '../Path/Path';
import './Courses.scss';

class Courses extends Component { 

  constructor(props) {
    super(props);
    this.state = { 
      courses: [
        {id: 1, title: "Basics of Programming", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
        {id: 2, title: "English", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}],files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
        {id: 3, title: "Soft skills", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
        {id: 4, title: "Basics of Programming", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
        {id: 5, title: "English", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
        {id: 6, title: "Soft skills", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
      ]
    };
  }

  render() {
    return (
      <div className="Courses">
        <div className="Courses__inner">
          <Path />
          {
            this.state.courses.map(course => {
              return <Course title={course.title} key={course.id} lessons={course.lessons}/>
            })
          }
        </div>
      </div>
    )
  }
  
};

export default Courses;
import { SET_FILES_STATE, SET_PATH_TITLE, SET_FILES_ARR } from "../actions/actionTypes";

const initialState = {
  filesState: false,
  pathTitle: "C# Programming",
  courses: [
    {id: 1, title: "Basics of Programming", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 2, title: "English", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}],files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 3, title: "Soft skills", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 4, title: "Basics of Programming", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 5, title: "English", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 6, title: "Soft skills", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
  ],
  filesArr: []
};

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILES_STATE:
      return {
        ...state,
        filesState: action.payload,
      };
    case SET_PATH_TITLE:
      return {
        ...state,
        pathTitle: action.payload,
      };
    case SET_FILES_ARR:
      return {
        ...state,
        filesArr: action.payload,
    };
    default:
      return state;
  }
};

export default filesReducer;
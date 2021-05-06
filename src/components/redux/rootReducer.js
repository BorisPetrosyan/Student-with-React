

import {
  ACCEPT_CHANGES,
  ACCEPT_CHANGES_GROUP,
  ACCEPT_CHANGES_STUDENT,
  CLEAR_TYPINGS_SEARCH,
  DELETE_FACULTY,
  DELETE_GROUP,
  DELETE_STUDENT,
  FACULTY_INPUT_CHANGE,
  FILTER_STUDENTS,
  GET_FACULTIES,
  GET_GROUPS,
  GET_STUDENTS,
  GROUP_INPUT_CHANGE,
  SEARCH_TYPINGS,
  STUDENT_INPUT_CHANGE,
} from "./ActionTypes/actionTypes";


// { id: 1, firstName: "Boris", lastName: 'Petrosyan', email: '114boko@gmail.com', phone: '37494384212', faculty: 'fizka', group: "Group2" },
// { id: 2, firstName: "Sevak", lastName: 'Stepanyan', email: 'sekoo@gmail.com', phone: '3244234424', faculty: 'English', group: "Group3" }
//  { id: 1, facultyName: "history" },
//  { id: 1, groupName: "Group1", facultyName: "Politiexnik" },


const initialState = {
  students: [],

  dashboardFilter: [],
  searchTypings: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    faculty: '',
    group: ''
  },

  faculties: [],
  groups: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_FACULTIES:

      return { ...state, faculties: action.faculties };

    case GET_GROUPS:

      return { ...state, groups: action.groups };
    case GET_STUDENTS:

      return { ...state, students: action.students };

    case DELETE_FACULTY:
      return {
        ...state,
        faculties: action.faculties,
        groups: action.groups,
        students: action.students,
      };

    case DELETE_GROUP:
      return { ...state, groups: action.groups, students: action.students };

    case DELETE_STUDENT:
      return { ...state, students: action.students };

    case FACULTY_INPUT_CHANGE:
      return { ...state, faculties: action.faculties };
    case STUDENT_INPUT_CHANGE:
      return { ...state, students: action.students };

    case GROUP_INPUT_CHANGE:
      return { ...state, groups: action.groups };

    case ACCEPT_CHANGES:
      return {
        ...state,
        faculties: action.faculties,
        groups: action.groups,
      };

    case ACCEPT_CHANGES_GROUP:
      return {
        ...state,
        groups: action.groups,
      };
    case ACCEPT_CHANGES_STUDENT:
      return {
        ...state,
        students: action.students,
      };

    case FILTER_STUDENTS:

      return { ...state, dashboardFilter: action.dashboardFilter };

    case SEARCH_TYPINGS:
      return { ...state, searchTypings: action.searchTypings };

    case CLEAR_TYPINGS_SEARCH:
      return { ...state, searchTypings: action.searchTypings, dashboardFilter: [] };

    default:
      return state;
  }
}

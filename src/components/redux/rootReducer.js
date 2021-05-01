import {
  ACCEPT_CHANGES,
  ACCEPT_CHANGES_GROUP,
  ADD_FACULTY,
  ADD_GROUP,
  ADD_STUDENT,
  CLOSE_EDIT_FACULTY,
  CLOSE_EDIT_GROUP,
  DELETE_FACULTY,
  DELETE_GROUP,
  DELETE_STUDENT,
  FACULTY_INPUT_CHANGE,
  FILTER_STUDENTS,
  GROUP_INPUT_CHANGE,
  SEARCH_TYPINGS,
  STUDENT_INPUT_CHANGE,
} from "./ActionTypes/actionTypes";

const initialState = {
  students:[
    { id: 1, firstName: "Boris" , lastName:'Petrosyan', email:'114boko@gmail.com' , phone:'+37494384212', faculty:'fizka', group: "Group2"},
    { id: 2, firstName: "Sevak" , lastName:'Stepanyan', email:'sekoo@gmail.com' , phone:'+3244234424', faculty:'English', group: "Group3"}
  ],

  dashboardFilter:[],
  searchTypings:{
    firstName:'',
    lastName:'',
    email:'',
    phone: '',
    faculty: '',
    group: ''
  },

  faculties: [
    { id: 1, facultyName: "history" },
    { id: 2, facultyName: "matematic" },
    { id: 3, facultyName: "fizka" },
    { id: 4, facultyName: "energo" },
    { id: 5, facultyName: "Politiexnik" },
    { id: 6, facultyName: "English" },
  ],
  groups: [
    { id: 1, groupName: "Group1", facultyName: "Politiexnik" },
    { id: 2, groupName: "Group2", facultyName: "fizka" },
    { id: 3, groupName: "Group3", facultyName: "English" },
    { id: 4, groupName: "Group4", facultyName: "English" },

  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FACULTY:
      return { ...state, faculties: [...state.faculties, action.faculties] };

    case ADD_GROUP:
      console.log(action)
      return { ...state, groups: [...state.groups, action.groups] };
  
    case ADD_STUDENT:
      console.log(action)
    return { ...state, students: [...state.students, action.students] };
  
    case DELETE_FACULTY:
      return { ...state, faculties: action.faculties, groups: action.groups ,students: action.students  };

    case DELETE_GROUP:
      return { ...state, groups: action.groups ,students: action.students};


    case DELETE_STUDENT:
      return { ...state,students: action.students};
  
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

    case CLOSE_EDIT_FACULTY:

      return { ...state, faculties: action.faculties };

    case CLOSE_EDIT_GROUP:

      return { ...state, groups: action.groups };

      case FILTER_STUDENTS:
      console.log(action)
        return { ...state, dashboardFilter: action.dashboardFilter  }; 

      case SEARCH_TYPINGS:
          
        return { ...state , searchTypings :  action.searchTypings };     

    default:
      return state;
  }
}

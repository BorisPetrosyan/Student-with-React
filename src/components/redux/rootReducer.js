import {
  ACCEPT_CHANGES,
  ACCEPT_CHANGES_GROUP,
  ADD_FACULTY,
  ADD_GROUP,
  CLOSE_EDIT_FACULTY,
  CLOSE_EDIT_GROUP,
  DELETE_FACULTY,
  DELETE_GROUP,
  FACULTY_INPUT_CHANGE,
  GROUP_INPUT_CHANGE,
} from "./ActionTypes/actionTypes";

const initialState = {
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
      return { ...state, groups: [...state.groups, action.groups] };

    case DELETE_FACULTY:
      return { ...state, faculties: action.faculties, groups: action.groups };

    case DELETE_GROUP:
      return { ...state, groups: action.groups };

    case FACULTY_INPUT_CHANGE:
      return { ...state, faculties: action.faculties };

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

    default:
      return state;
  }
}

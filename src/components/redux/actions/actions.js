

import { db } from "../../../config/fbConfig";
import {
  ACCEPT_CHANGES,
  ACCEPT_CHANGES_GROUP,
  DELETE_FACULTY,
  DELETE_GROUP,
  DELETE_STUDENT,
  FACULTY_INPUT_CHANGE,
  GROUP_INPUT_CHANGE,
  STUDENT_INPUT_CHANGE,
  FILTER_STUDENTS,
  SEARCH_TYPINGS,
  CLEAR_TYPINGS_SEARCH,
  ACCEPT_CHANGES_STUDENT,
} from "../ActionTypes/actionTypes";
import { getData } from "./fbActions";


export const setFaculty = (faculties) => (dispatch) => {
  db.collection('faculties').add({
    facultyName: faculties.payload
  })
  dispatch(getData("faculties"));

}

export const setStudent = (student) => (dispatch) => {

  db.collection('students').add({
    firstName: student.payload.firstName,
    lastName: student.payload.lastName,
    email: student.payload.email,
    phone: student.payload.phone,
    faculty: student.payload.faculty,
    group: student.payload.group,
  })

  dispatch(getData("students"));
};



export const setGroup = (groups) => (dispatch) => {
  db.collection('groups').add({
    groupName: groups.payload.group,
    facultyName: groups.payload.faculty
  })
  dispatch(getData("groups"));
}



export const deleteFaculty = (data) => (dispatch, getstate) => {

  const faculties = getstate().faculties.filter((a) => a.id !== data.payload.id)
  const groups = getstate().groups.filter((a) => a.facultyName !== data.payload.name)
  const students = getstate().students.filter(
    (a) => a.faculty !== data.payload.name
  );



  return dispatch({
    type: DELETE_FACULTY,
    faculties,
    groups,
    students,
  });
}


export const deleteGroup = (data) => (dispatch, getstate) => {


  const groups = getstate().groups.filter((a) => a.id !== data.payload.id)
  const students = getstate().students.filter(
    (a) => a.group !== data.payload.name
  );
  return dispatch(({
    type: DELETE_GROUP,
    students,
    groups,
  }))
}
export const deleteStudent = (data) => (dispatch, getstate) => {



  const students = getstate().students.filter(
    (a) => a.id !== data.payload.id
  );
  return dispatch(({
    type: DELETE_STUDENT,
    students,
  }))
}



export const acceptChanges = (data) => (dispatch, getstate) => {

  const faculties = getstate().faculties.map(item => {

    if (item.id === data.payload.id) {
      return {
        ...item,
        facultyName: data.payload.faculty,
        input: false
      };
    }
    return item;
  });

  const groups = getstate().groups.map(item => {

    if (item.facultyName === data.payload.oldValue) {
      return {
        ...item,
        facultyName: data.payload.faculty,
      };
    }
    return item;
  });

  return dispatch({
    type: ACCEPT_CHANGES,
    faculties,
    groups,
  });



}
export const acceptChangesGroup = (data) => (dispatch, getstate) => {
  const groups = getstate().groups.map((item) => {
    if (item.id === data.payload.id) {
      return {
        ...item,
        facultyName: data.payload.faculty,
        groupName: data.payload.group,
        input: false,
      };
    }
    return item;
  });

  return dispatch({
    type: ACCEPT_CHANGES_GROUP,
    groups
  });
};
export const acceptChangesStudnet = (data) => (dispatch, getstate) => {
  const students = getstate().students.map((item) => {
    if (item.id === data.payload.id) {
      return {
        ...item,
        firstName: data.payload.firstName,
        lastName: data.payload.lastName,
        email: data.payload.email,
        phone: data.payload.phone,
        faculty: data.payload.faculty,
        group: data.payload.group,
        input: false,
      };
    }
    return item;
  });

  return dispatch({
    type: ACCEPT_CHANGES_STUDENT,
    students,
  });
};



export const inputFaculty = (id) => (dispatch, getstate) => {

  const faculties = getstate().faculties.map(item => {

    if (item.id === id.payload) {
      if (id.input) {
        return {
          ...item,
          input: true
        };
      } else {
        return {
          ...item,
          input: false
        };
      }

    }
    return item;


  });

  return dispatch(({
    type: FACULTY_INPUT_CHANGE, faculties: faculties
  }))
}

export const inputStudent = (id) => (dispatch, getstate) => {

  const students = getstate().students.map(item => {

    if (item.id === id.payload) {
      if (id.input) {
        return {
          ...item,
          input: true
        };
      } else {
        return {
          ...item,
          input: false
        };
      }

    }
    return item;


  });

  return dispatch(({
    type: STUDENT_INPUT_CHANGE, students
  }))
}



export const inputGroup = (id) => (dispatch, getstate) => {

  const groups = getstate().groups.map(item => {

    if (item.id === id.payload) {
      if (id.input) {
        return {
          ...item,
          input: true
        };
      } else {
        return {
          ...item,
          input: false
        };
      }

    }
    return item;


  });

  return dispatch(({
    type: GROUP_INPUT_CHANGE, groups: groups
  }))
}





export const clearTypings = () => (dispatch) => {
  return dispatch(({
    type: CLEAR_TYPINGS_SEARCH,
    searchTypings: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      faculty: '',
      group: ''
    },
  }))
}

export const multiFilter = () => async (dispatch, getstate) => {
  const students = await getstate().students;
  const searchTypings = getstate().searchTypings;
  const filterStudnets = students.filter((item) => {
    return (
      item.firstName.toLowerCase().indexOf(searchTypings.firstName) >= 0 &&
      item.lastName.toLowerCase().indexOf(searchTypings.lastName) >= 0 &&
      item.email.toLowerCase().indexOf(searchTypings.email) >= 0 &&
      item.phone.indexOf(searchTypings.phone) >= 0 &&
      item.faculty.indexOf(searchTypings.faculty) >= 0 &&
      item.group.indexOf(searchTypings.group) >= 0
    );
  });
  console.log(filterStudnets);

  return dispatch({
    type: FILTER_STUDENTS,
    dashboardFilter: filterStudnets,
  });
};
export const typingChange = (data) => (dispatch, getstate) => {


  const searchTypings = getstate().searchTypings

  if (data.typing === 'firstName') {
    searchTypings.firstName = data.payload
  }

  if (data.typing === 'lastName') {
    searchTypings.lastName = data.payload
  }

  if (data.typing === 'email') {
    searchTypings.email = data.payload
  }

  if (data.typing === 'phone') {
    searchTypings.phone = data.payload
  }

  if (data.typing === 'faculty') {
    searchTypings.faculty = data.payload

  }
  if (data.typing === 'group') {
    searchTypings.group = data.payload

  }

  return dispatch({
    type: SEARCH_TYPINGS,
    searchTypings,
  });
}

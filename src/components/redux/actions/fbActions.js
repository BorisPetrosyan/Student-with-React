import { db } from "../../../config/fbConfig";
import {
  GET_FACULTIES,
  GET_GROUPS,
  GET_STUDENTS,
} from "../ActionTypes/actionTypes";

export const getData = (collection) => async (dispatch) => {
  const data = await db.collection(collection).get();
  const byIdData = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (collection === "faculties") {
    return dispatch({
      type: GET_FACULTIES,
      faculties: byIdData,
    });
  }
  if (collection === "groups") {
    return dispatch({
      type: GET_GROUPS,
      groups: byIdData,
    });
  }
  if (collection === "students") {
    return dispatch({
      type: GET_STUDENTS,
      students: byIdData,
    });
  }
};

export const createData = (collection) => async (dispatch) => {};

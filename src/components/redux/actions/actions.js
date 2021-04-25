

import { ACCEPT_CHANGES, ADD_FACULTY, ADD_GROUP, DELETE_FACULTY, INPUT_CHANGE } from "../ActionTypes/actionTypes";


export const setFaculty = (faculties) => ({
    type: ADD_FACULTY, faculties: { id: faculties.id, facultyName: faculties.payload }
})

export const setGroup = (groups) => {


    return ({

        type: ADD_GROUP, groups: {
            id: groups.id,
            groupName: groups.payload.group,
            facultyName: groups.payload.faculty
        }
    })
}



export const deleteFaculty = (id) => {


    return ({
        type: DELETE_FACULTY, id: id.payload.id, name: id.payload.name
    })
}

export const acceptChanges = (data) => (dispatch, getstate) => {
    console.dir(data)
    const faculties = getstate().faculties.map(item => {

        if (item.id === data.payload) {
            return {
                ...item,
                input: true
            };
        }
        return item;


    });

    return dispatch(({
        type: ACCEPT_CHANGES, faculties: faculties
    }))
}

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
        type: INPUT_CHANGE, faculties: faculties
    }))
}



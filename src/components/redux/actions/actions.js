

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
} from "../ActionTypes/actionTypes";


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



export const deleteFaculty = (data) => (dispatch, getstate) => {

    const faculties = getstate().faculties.filter((a) => a.id !== data.payload.id)
    const groups = getstate().groups.filter((a) => a.facultyName !== data.payload.name)



    return dispatch(({
        type: DELETE_FACULTY, faculties: faculties, groups: groups
    }))
}


export const deleteGroup = (data) => (dispatch, getstate) => {

    console.log(data)
    const groups = getstate().groups.filter((a) => a.id !== data.payload.id)
    return dispatch(({
        type: DELETE_GROUP, groups: groups
    }))
}

export const acceptChanges = (data) => (dispatch, getstate) => {
    console.log(data, getstate());
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

    return dispatch(({
        type: ACCEPT_CHANGES, faculties: faculties, groups: groups
    }))



}
export const acceptChangesGroup = (data) => (dispatch, getstate) => {
    console.log(data, getstate());

    const groups = getstate().groups.map(item => {

        if (item.id === data.payload.id) {
            return {
                ...item,
                facultyName: data.payload.faculty,
                groupName: data.payload.group,
                input: false

            };
        }
        return item;
    });

    return dispatch(({
        type: ACCEPT_CHANGES_GROUP, groups: groups
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
        type: FACULTY_INPUT_CHANGE, faculties: faculties
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



export const closeEditFaculty = (data) => (dispatch) => {
    const faculties = data.faculties.map((item) => {
        if (item.input === true) {
            return {
                ...item,
                input: false,
            };
        }
        return item;
    });

    return dispatch({
        type: CLOSE_EDIT_FACULTY,
        faculties,
    });
};

export const closeEditGroup = (data) => (dispatch) => {
    const groups = data.groups.map((item) => {
        if (item.input === true) {
            return {
                ...item,
                input: false,
            };
        }
        return item;
    });

    return dispatch({
        type: CLOSE_EDIT_GROUP,
        groups,
    });
};



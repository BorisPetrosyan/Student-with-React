import { ACCEPT_CHANGES, ADD_FACULTY, ADD_GROUP, DELETE_FACULTY, INPUT_CHANGE } from "./ActionTypes/actionTypes"

const initialState = {
    faculties: [
        { id: 1, facultyName: 'dad' },
        { id: 2, facultyName: 'Politiexnik' },
        { id: 3, facultyName: '354' },
        { id: 4, facultyName: 'Polit' }

    ],
    groups: [
        { id: 1, groupName: 'Group1', facultyName: 'Politiexnik' }
    ]
}


export default function rootReducer(state = initialState, action) {


    switch (action.type) {

        case ADD_FACULTY:
            return { ...state, faculties: [...state.faculties, action.faculties] }
        case ADD_GROUP:
            return { ...state, groups: [...state.groups, action.groups] }
        case DELETE_FACULTY:

            return {
                ...state, faculties: [...state.faculties.filter(a => a.id !== action.id)],
                groups: [...state.groups.filter(a => a.facultyName !== action.name)]
            }
        case INPUT_CHANGE:

            return { ...state, faculties: action.faculties }
        case ACCEPT_CHANGES:
            // console.log(ACCEPT_CHANGES)
            return { ...state, faculties: action.faculties }
        default:
            return state
    }
}


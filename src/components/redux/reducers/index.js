import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducer from '../rootReducer';



const rootReducer = combineReducers({
    reducer1: reducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


import * as actions from '../action/actionTypes';
import { updateObject } from '../../resources/utility';

const INITIAL_STATE = {
    userTasks: [],
    status: 'idle',
    hasError: null,
}

const taskReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case actions.TASK_ADD: 
            return updateObject(state, {
                status: 'idle'
            });
        case actions.FETCH_START: 
            return updateObject(state, {
                status: 'loading', 
                userTasks: [...state.userTasks]
            });
        case actions.FETCH_SUCCESS: 
            return updateObject(state, {
                status: 'success',
                userTasks: action.payload
            });
        case actions.FETCH_FAIL: 
            return updateObject(state, {
                status: 'failed',
                error: action.payload, 
                userTasks: [...state.userTasks]
            });
        case actions.AUTH_LOGOUT:
            return updateObject(state, {
                status: 'idle',
                userTasks: []
            });
        default: return state;
    }
} 

export default taskReducer;
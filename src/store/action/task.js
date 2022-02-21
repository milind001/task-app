

import * as actionTypes from './actionTypes';
import axios from '../../resources/axios';
import { toast } from "react-toastify";
import { Redirect } from 'react-router-dom';

export const taskStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const taskAddSuccess = () => {
    return {
        type: actionTypes.TASK_ADD
    }
}

export const taskSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        payload: payload
    }
}

export const taskFail = (payload) => {
    return {
        type: actionTypes.FETCH_FAIL,
        payload: payload
    }
}

//Action dispatch to logout 
export const logout = () => {
    localStorage.clear();
    <Redirect to="/"/>
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

//Action dispatch to fetch user tasks  
export const getTasks = (userId) => {
    return dispatch => {
        dispatch(taskStart())
        axios.get(`task/${userId}`)
        .then(res => {
            dispatch(taskSuccess(res.data))
        })
        .catch(err => {
            dispatch(taskFail(err.message))
        });
    }
};

//get username from localstorage
const userId = localStorage.getItem('username');

//Action dispatch to add user task
export const addTask = (name, description) => {
    return dispatch => {
        axios.post('/task', {name, description, username: userId})
        .then(res => {
            dispatch(taskAddSuccess())
            toast.success("Success: Task added")
        })
        .catch(err => {
            toast.error(`Error: ${err.message}`)
        });
    }
}

//Action dispatch to update user task
export const updateTask = (value, taskId) => {
    return dispatch => {
        axios.put(`/task/${taskId}/${value}`)
            .then(res => {
                dispatch(getTasks(userId))
                value === 1 ? toast.success("Complete") : toast.warning("Incomplete");
            })
            .catch(err => {
                toast.error(`Error: ${err.message}`)
            })
    }
}

//Action dispatch to delete user task
export const deleteTask = (taskId) => {
    return dispatch => {
        axios.delete(`/task/${taskId}`)
            .then(res => {
                // console.log(res)
                dispatch(getTasks(userId))
                toast.success("Task Deleted")
            })
            .catch(err => {
                toast.error(`Error: ${err.message}`)
            })
    }
}

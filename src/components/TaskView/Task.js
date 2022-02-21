

import React, {useCallback, memo} from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './task.scss';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import { ToastContainer } from 'react-toastify';

const Task = memo((props) => {
  const {_id, name, description, status, createddate} = props.task;
  let flag;
  if(status === 1){
    flag = 'complete';
  }else if(status === 2){
    flag = 'incomplete';
  }else {
    flag = 'default';
  }

  const dispatch = useDispatch();

  const handleUpdate = useCallback((value, taskId) => {
    dispatch(actions.updateTask(value, taskId))
  }, [dispatch]);

  const handleDelete = useCallback((taskId) => {
    dispatch(actions.deleteTask(taskId))
  }, [dispatch])

  return  <>
            <div className={`card card-1 ${flag}`}>
              <div className='delete-task' onClick={() => handleDelete(_id)}>
                <DeleteOutlineOutlinedIcon/>
              </div>
              <div className="card__title">Task Name</div>
              <p style={{marginTop: '0px'}}>{name}</p>
              <div className="card__title">Task Description</div>
              <p style={{marginTop: '0px'}}>{description}</p>
              <p className="card__date">Created at: {new Date(createddate).toLocaleString()}</p>
              {status !== 1 && (
                <div className='mark_sec'>
                <div className='success' onClick={() => handleUpdate(1, _id)}><CheckCircleOutlineIcon />Complete</div>
                <div className='danger' onClick={() => handleUpdate(2, _id)}><CancelIcon/>Incomplete</div>
              </div>
              )}
            </div> 
            <ToastContainer autoClose={2000} /> 
  </>
});

export default Task;

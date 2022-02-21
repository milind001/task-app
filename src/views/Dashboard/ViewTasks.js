

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import Task from '../../components/TaskView/Task';

const ViewTasks = () => {

  const dispatch = useDispatch();
  const userId = localStorage.getItem('username');
  const taskState = useSelector(state => state);
  const [userTaskData, setUserTasks] = useState(taskState.userTasks)

  useEffect(() => {
    if(taskState.status === 'idle')  dispatch(actions.getTasks(userId)) 
  }, [userId, dispatch, taskState.status, taskState.isCount]);

  useEffect(() => {
    if(taskState.userTasks) handleData(taskState.userTasks)
  }, [taskState])

  const handleData = userTask => {
    setUserTasks(userTask);
  }

  const allTasks = 
    userTaskData ? 
        userTaskData.map(task => (
          <Task task={task} key={task.name} />
        )) 
    : undefined;

  return <div className="cards">
    {allTasks}
  </div>;
};

export default ViewTasks;

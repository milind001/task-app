

import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
const Dashboard = lazy(() => import('../views/Dashboard'));
const Addtask = lazy(() => import('../views/Dashboard/Addtask'));
const ViewTasks = lazy(() => import('../views/Dashboard/ViewTasks'));

const AppRoutes = () => {
  return (
      <Suspense fallback={<Spinner/>}>
          <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/add-task" component={Addtask} />
              <Route exact path="/my-tasks" component={ViewTasks} />
          </Switch>
      </Suspense>
  );
};

export default AppRoutes;

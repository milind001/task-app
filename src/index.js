import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import taskReducer from './store/reducer/task';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(taskReducer, composeEnhancers(
  applyMiddleware(thunk)
)) 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

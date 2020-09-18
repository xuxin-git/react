import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './example/todoList/index'
import App from './example/todoList/components/App'
import {Button} from "antd";
import Home from "./home/home";
ReactDOM.render(
  <Provider store={store}>
      <Home/>
  </Provider>,

  document.getElementById('root')
);



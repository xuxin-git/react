import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './example/todoList/index'
import App from './example/todoList/components/App'
import {Button} from "antd";

ReactDOM.render(
  <Provider store={store}>
      <Button type={"primary"}>add</Button>
  </Provider>,

  document.getElementById('root')
);



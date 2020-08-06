import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './example/todoList/index'
import App from './example/todoList/components/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);



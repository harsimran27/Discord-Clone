import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userReducer from "./redux/Reducer/userReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

let myStore = createStore(userReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import { createStore } from "redux"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, composeWithDevTools(), applyMiddleware(thunk))
console.log(store, "store")
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

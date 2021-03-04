import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav_bar from './Nav_bar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Nav_bar/>
  <div className = "content">
    
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

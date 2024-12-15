import React from 'react';  // it is only building the componenets
import ReactDOM from 'react-dom/client';  // ya library react ka code ko html code ma convert karti ha jisa apna browser smaj ska 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  React.StrictMode =ys special type ka components ha jo btatata ha ki browser ma hmra code ma kha error ha 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
// //import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import WordSearch from './App.js'
// const App = () => {
//     return(
//         <div>
//             <h1> Word Scramble </h1>
//             <WordSearch />
            
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('app'),
// );

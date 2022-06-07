import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Board from './board';
// import Bord from './board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Bord =ReactDOM.createRoot(document.querySelector('board2'));
Bord.render(
  <h1>hello word</h1>
);
// ReactDOM.render(
//   <Board />,document.querySelector('board')
// );
const oard=ReactDOM.createRoot(document.querySelector('board'));
oard.render(
<>
  <Board />
</>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

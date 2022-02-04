import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement("div", {style: {color: "red", font: "bold", textAlign: "center"}}, React.createElement("h1", null, "Welcome To my Town!") ),
  document.getElementById('root')
);
ReactDOM.render( 
  React.createElement(
  <ul>
  <li>Lake</li>
  <li>Beach</li>
  <li>Hiking</li>
  <li>Fishing</li>
  <li>Horse Riding</li>
</ul>
),
document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

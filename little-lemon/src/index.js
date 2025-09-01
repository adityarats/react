import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
<>
  <meta name="description" content="Little Lemon - Your favorite restaurant for delicious meals." />
  <meta name="og:title" content="Little Lemon - Your favorite restaurant for delicious meals." />
  <meta name="og:description" content="Little Lemon is a cozy restaurant offering a variety of delicious meals made from fresh ingredients." />
  <meta name="og:image" content="/images/Logo.svg" />
  <script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
</>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import scenary from './utils/scenary';
import reportWebVitals from './reportWebVitals';
import { Footer } from './components/footer/footer';

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Fotter = ReactDOM.createRoot(document.getElementById('footer'));
Fotter.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
scenary();

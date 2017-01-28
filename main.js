import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const app = document.getElementById('app');
ReactDOM.render(<App />, app);

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(app);}, 10000);
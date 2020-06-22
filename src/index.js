import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hola from './component/userTable';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hola />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, ModuleOne, ModuleTwo, LogIn, Header} from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <ModuleOne />,
document.getElementById('module-one')
);


ReactDOM.render(
  <ModuleTwo />,
document.getElementById('module-two')
);


ReactDOM.render(
  <LogIn />,
document.getElementById('log-in-btn')
);



ReactDOM.render(
  <Header />,
document.getElementById('header')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

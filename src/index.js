import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// O jsx <App /> é um componente e precisa do React para funcionar, por isso o react foi importado 
// utilizado uma unica vez em toda a aplicação ReactDOM.render (...) 
// O id root em document.getElementById('root') esta no index.html da pasta public
// O jsx <App /> sera injetado na tag root do index.html da pasta public
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

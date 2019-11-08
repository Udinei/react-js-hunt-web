import React, { Component } from 'react';
//import api from "./services/api";
import Routes from './routes';

import "./styles.css"

import Header from './components/Header';
//import Main from './pages/main';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;

/** Component pode ser um pedaço de lógica, estrutura e estilização
 * que pode ser reutilizado, em outras classes
 * render() - é utilizado para renderizar codigos jsx
 * className - é uma classe do jsx 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Word</h1>
      </div>
   );
 }
}
*/

/** Também pode ser utilizado da forma
 *  abaixo mas sem os recursos da classe Component 
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>Hello RocketSeat</h1>
    </div>
  );
}
*/


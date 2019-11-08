import React from 'react';
import './styles.css';
 
/** stalles component,  que retorna uma funcao */
const Header = () => (
  <header id="main-header">JSHunt</header>
 );

 export default Header;

 /** o codigo abaixo é melhor utilizado quando
  * se esta usando state
 class Header extends Component {
     render(){
         return <h1>Hello</h1>
     }
 }
 */

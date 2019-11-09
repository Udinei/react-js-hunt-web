import React from 'react';
import './styles.css';
 
/** stalles component, quando o component é criado no formato de função dentro de uma variavel constante
 * que recebe essa arrow function, e não criada como uma classe, no interior
 *  da funcao pode ser utilizado codigo html normal e dentro das { } codigo javascript
 * bem como aceita ser aplicado classes css tambem  */
const Header = () => (
  <header id="main-header">JSHunt</header>
 );

 // e ser exportada com um component
 export default Header;

 /** O codigo abaixo faz o mesmo que codigo acima mas 
  * é melhor utilizado quando se esta usando state
 class Header extends Component {
     render(){
         return <h1>Hello</h1>
     }
 }
 */

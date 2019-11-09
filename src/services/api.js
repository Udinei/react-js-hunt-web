// axios utilizado fazer acesso a dados externos a aplicação
// utilizando metodos Rest
import axios from 'axios';

const api = axios.create({
     baseURL: "https://rocketseat-node.herokuapp.com/api"
  });

  export default api;
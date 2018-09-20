import axios from 'axios';

class FormularioService {

  cadastrarPessoa(payload) {
    return axios.post('https://5ba2aa9bee710f0014dd77e7.mockapi.io/pessoas', payload);
  }

}

const service = new FormularioService();
export default service;

//  O que o o axios faz, o que é fetch, o que é uma promise.

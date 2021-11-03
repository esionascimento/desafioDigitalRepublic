import axios from 'axios';

export const authLogin = (user) => {
  axios.post('https://object-back.herokuapp.com/login', user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      window.location.pathname = '/dashboard';
    })
    .catch(() => window.alert('Usuario inexistente ou dados incorretos'));
};

export const newCadastro = (user) => {
  axios.post('https://object-back.herokuapp.com/user', user)
  .then((res) => {
    window.alert('Usuario cadastrado com sucesso.');
  })
  .catch(() => window.alert('Erro ao cadastrar usuario'));
};
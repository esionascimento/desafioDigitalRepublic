import axios from 'axios';

export const authLogin = (user) => {
  axios.post('https://object-back.herokuapp.com/login', user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);

      window.location.pathname = '/dashboard';
    })
    .catch(() => console.log('error login'));
};

export const newCadastro = (user) => {
  axios.post('https://object-back.herokuapp.com/user', user)
  .then((res) => {
    console.log('Usuario cadastrado com sucesso');
  })
  .catch(() => console.log('error cadastro'));
};
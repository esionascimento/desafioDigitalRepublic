import axios from 'axios';

export const authLogin = (user) => {
  axios.post('https://project-republic.herokuapp.com/login', user)
    .then((res) => {
      console.log('res :', res.data);
      localStorage.setItem('token', res.data.token);

      window.location.pathname = '/dashboard';
    })
    .catch((res) => console.log('error login'));
};

export const newCadastro = (user) => {
  axios.post('https://project-republic.herokuapp.com/user', user)
  .then((res) => {
    console.log('res :', res);
    console.log(res.data);
  })
  .catch(() => console.log('error cadastro'));
};
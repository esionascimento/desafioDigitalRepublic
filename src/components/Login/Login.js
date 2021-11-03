import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { authLogin } from '../../service/service';

import './Login.css';

function initialState() {
  return { email: '', password: '' };
}

export function Login() {
  const [valuesLogin, setValues] = useState(initialState);
  
  /* const [validLogin, setValidLogin] = useState(false); */
  const { email, password } = valuesLogin;

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...valuesLogin,
      [name]: value,
    })
  }
  
  async function onSubmit(event) {
    event.preventDefault();

    authLogin(valuesLogin);

    setValues(initialState);
    /* setValidLogin(true); */
  }

  return (
    <div className="cardLogin">
      <form onSubmit={onSubmit}>
        {/* {validLogin && 
          <h3>Credenciais inexistente ou invalida</h3>
        } */}
        <div className="input-form">
          <div className="input-div">
            <input type="text"
              data-testid="input-email"
              name="email"
              className="input-in input-ra"
              value={email}
              required
              placeholder="email@email.com"
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <input type="password"
              data-testid="input-password"
              name="password"
              className="input-in input-ra"
              onChange={onChange}
              value={password}
              required
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="input-form">
          <button
            type="submit"
            value="Login"
            className="input-login input-ra"
          >
            Entrar
          </button>
        </div>
        <hr className="hr2" />
        <div className="footer">
          <div className="links">
            Não tem uma conta?
            <Link to="/cadastro">Criar nova conta</Link>
          </div>
          <div className="">
            {/* <a href="#">Esqueceu sua senha?</a> */}
          </div>
        </div>
      </form>
    </div>
  );
}

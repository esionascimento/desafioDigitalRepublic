import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';

import { newCadastro } from '../../service/service';

import './Cadastro.css';

const initialState = {
  name: '',
  email: '',
  password: '',
}

export function Cadastro() {
  const [redirect, setRedirect] = useState(false);
  const [cadastro, setCadastro] = useState(initialState);
  
  function onChange(event) {
    const { value, name } = event.target;
    setCadastro({
      ...cadastro,
      [name]: value,
    })
  }
  
  function onSubmit() {
    newCadastro(cadastro);
    setRedirect(true);
    /* setStorage(cadastro); */
  }
  
  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className="card">
      <div>
        <h3>Registre-se</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="input-form">
          <div className="input-div">
            <input
              type="text"
              name="name"
              className="input-in input-ra"
              placeholder="Nome"
              onChange={onChange}
              required
            />
          </div>
          <div className="input-div">
            <input
              type="text"
              name="email"
              className="input-in input-ra"
              placeholder="Email"
              onChange={onChange}
              required
            />
          </div>
          <div className="input-div">
            <input
              type="password"
              name="password"
              className="input-in input-ra"
              onChange={onChange}
              placeholder="Senha"
              required
            /> 
          </div>
        </div>
        <div className="input-form">
          <button type="submit" value="cadastro" className="input-login input-ra">
            Cadastra-se
          </button>
        </div>
      </form>
    </div>
  )
}

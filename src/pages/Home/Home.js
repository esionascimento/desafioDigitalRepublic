import React from 'react';

import { Login } from '../../components/Login/Login';

import './Home.css'

export function Home() {
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="left">
            <h1>Calculadora de Tintas</h1>
            <p></p>
          </div>
          <div className="right">
            <Login />
          </div>
        </div>
      </div>
      <footer className="rodape">
        Desafio 
      </footer>
    </>
  );
}

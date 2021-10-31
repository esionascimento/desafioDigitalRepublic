import React from 'react';

import { Login } from '../../components/Login/Login';

import './Home.css'

function Home() {
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

export default Home;
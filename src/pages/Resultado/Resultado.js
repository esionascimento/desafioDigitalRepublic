import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import  { Redirect } from 'react-router-dom';

import './Resultado.css';

export function Resultado() {
  const { resultadoTotalParedeM2 } = useSelector((state) => state.simulador);
  const { lata05, lata25, lata36, lata18 } = useSelector((state) => state.calcular);
  const [redirect, setRedirect] = useState(false);

  function onClickResult() {
    setRedirect(true);
  }
  
  if (redirect) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="conteiner">
      <h2>Resultado</h2>
      <div className="conteiner-body">
        <div>
          <p>Total de parede: {(resultadoTotalParedeM2).toFixed(2)}m²</p>
        </div>
        <div>
          <p>Precisa de:</p>
          {lata05 > 0 && <p>{lata05} latas de 0.5L</p>}
          {lata25 > 0 && <p>{lata25} latas de 2.5L</p>}
          {lata36 > 0 && <p>{lata36} latas de 3.6L</p>}
          {lata18 > 0 && <p>{lata18} latas de 18L</p>}
        </div>
        <button className="btn btn-primary" onClick={onClickResult}>Voltar</button>
      </div>
      <footer className="rodape">
        Resultado desenvolvido em pair programming com João Oliveira
      </footer>
    </div>
  );
};


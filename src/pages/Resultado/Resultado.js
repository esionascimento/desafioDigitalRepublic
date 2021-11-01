import React from 'react';
import { useSelector } from 'react-redux';

import './Resultado.css';

export function Resultado() {
  const { resultadoTotalParedeM2 } = useSelector((state) => state.simulador);
  const { lata05, lata25, lata36, lata18 } = useSelector((state) => state.calcular);
  
  return (
    <div className="conteiner">
      <h2>Resultado</h2>
      <div className="conteiner-body">
        <div>
          <p>Total de parede: {resultadoTotalParedeM2}m^2</p>
        </div>
        <div>
          {lata05 > 0 && <p>Precisa de {lata05} latas de 0.5L</p>}
          {lata25 > 0 && <p>Precisa de {lata25} latas de 2.5L</p>}
          {lata36 > 0 && <p>Precisa de {lata36} latas de 3.6L</p>}
          {lata18 > 0 && <p>Precisa de {lata18} latas de 18L</p>}
        </div>
      </div>
      <footer className="rodape">
        Resultado desenvolvido em pair programming com João Oliveira
      </footer>
    </div>
  );
};


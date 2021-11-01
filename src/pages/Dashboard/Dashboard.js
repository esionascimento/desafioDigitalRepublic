import React from 'react';

import { Cards } from '../../components/Cards/Cards';

import './Dashboard.css';

export function Dashboard() {
  return (
    <div className="container-pai">
      <div className="text">
        <h1>Calculadora de Tinta</h1>
        <p>Simulador de Tinta para estimar Litros nescessario para pintura de uma parede</p>
        <p>Não precisa nescessariamente ter as medidas das 4 paredes, uma parede já é nescessario</p>
      </div>
      <Cards />
    </div>
  );
};

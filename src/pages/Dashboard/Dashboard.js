import React from 'react';

import { Cards } from '../../components/Cards/Cards';

export function Dashboard() {
  return (
    <div>
      <div>
        <p>Cada litro de tinta é capaz de pintar 5 metros quadrados</p>
        <p>Não considerar teto nem piso</p>
        <p>As variações de tamanho das latas de tinta são: 0,5L; 2,5L; 3,6L; 18L</p>
      </div>
      <Cards />
    </div>
  );
};

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionLata05, actionLata25, actionLata36, actionLata18 } from '../../store/Calcular/CalcularAction';

export function CalcularResultado() {
  console.log('oj');
  const dispatch = useDispatch()
  const { resultadoTotalParedeM2 } = useSelector((state) => state.simulador);
  
  function calcularQtdLatasTintas() {
    let lata05 = 0, lata25 = 0, lata36 = 0, lata18 = 0;
    let litroTintas = resultadoTotalParedeM2 / 5;
    while (litroTintas > 0) {
      if (litroTintas >= 18) {
        litroTintas = litroTintas - 18
        lata18 += 1;
      } else if (litroTintas >= 3.6) {
        litroTintas = litroTintas - 3.6;
        lata36 += 1;
      } else if (litroTintas >= 2.5) {
        litroTintas = litroTintas - 2.5;
        lata25 += 1;
      } else {
        litroTintas = litroTintas - 0.5;
        lata05 += 1;
      }
    }
    if (lata05 > 0) {
      console.log(`Precisa de ${lata05} latas de 0.5L`);
      dispatch(actionLata05(lata05));
    }
    if (lata25 > 0) {
      console.log(`Precisa de ${lata25} latas de 2.5L`);
      dispatch(actionLata25(lata25));
    }
    if (lata36 > 0) {
      console.log(`Precisa de ${lata36} latas de 3.6L`);
      dispatch(actionLata36(lata36));
    }
    if (lata18 > 0) {
      console.log(`Precisa de ${lata18} latas de 18L`);
      dispatch(actionLata18(lata18));
    }
  }

  return (
    <div>{calcularQtdLatasTintas()}</div>
    
  );
};


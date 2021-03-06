export function calcularQtdLatasTintas(dispatch, resultadoTotalParedeM2, actionLata05, actionLata25, actionLata36, actionLata18) {
console.log('dispatch :', dispatch);
  let lata05 = 0, lata25 = 0, lata36 = 0, lata18 = 0;
  let litroTintas = resultadoTotalParedeM2 / 5;
  console.log('resultadoTotalParedeM2 :', resultadoTotalParedeM2);
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
    dispatch(actionLata05(lata05));
  }
  if (lata25 > 0) {
    dispatch(actionLata25(lata25));
  }
  if (lata36 > 0) {
    dispatch(actionLata36(lata36));
  }
  if (lata18 > 0) {
    dispatch(actionLata18(lata18));
  }
};
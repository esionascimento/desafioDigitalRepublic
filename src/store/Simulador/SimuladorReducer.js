const INITIAL_STATE = {
  resultadoTotalParedeM2: '',
};

export function SimuladorReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'Calcular':
      return {
        resultadoTotalParedeM2: action.payload[0]
      }
    default:
      return state;
  }
}
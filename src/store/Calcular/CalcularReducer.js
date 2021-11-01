const INITIAL_STATE = {
  lata05: 0, lata25: 0, lata36: 0, lata18: 0,
};

export function calcularLatasM2(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LATA05':
      return {
        ...state,
        lata05: action.payload[0]
      }
    case 'LATA25':
      return {
        ...state,
        lata25: action.payload[0]
      }
    case 'LATA36':
      return {
        ...state,
        lata36: action.payload[0]
      }
    case 'LATA18':
      return {
        ...state,
        lata18: action.payload[0]
      }
    default:
      return state;
  }
}
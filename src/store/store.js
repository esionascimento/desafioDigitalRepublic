import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { calcularLatasM2} from './Calcular/CalcularReducer';
import { SimuladorReducer } from './Simulador/SimuladorReducer';

const rootReducer = combineReducers({
  calcular: calcularLatasM2,
  simulador: SimuladorReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
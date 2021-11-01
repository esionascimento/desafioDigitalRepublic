import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Simulador from './Simulador/SimuladorReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  simulador: Simulador,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
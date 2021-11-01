import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import { Provider } from 'react-redux';

import { Home } from './pages/Home/Home.js';
import { Cadastro } from './pages/Cadastro/Cadastro.js';
import { Dashboard } from './pages/Dashboard/Dashboard.js';
import { Resultado } from './pages/Resultado/Resultado.js';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/resultado" component={Resultado} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

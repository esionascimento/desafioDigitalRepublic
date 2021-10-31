import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home/Home.js';
import { Cadastro } from './pages/Cadastro/Cadastro.js';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Router } from 'react-router-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Home } from "../pages/Home/Home.js";
import '@testing-library/jest-dom';

describe("Página Home.js", () => {
  const history = createMemoryHistory();
  
  it("Testando: 2(Dois) inputs na página Home", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(getByTestId('input-email')).toBeEmptyDOMElement();
    expect(getByTestId('input-password')).toBeEmptyDOMElement();
  });
  it("Testando: Rota atual está na página home", () => {
    const { getByText } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    const titulo = getByText(/Calculadora de Tintas/i);
    expect(titulo).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
  it("Test: Redirecionar para a página dashboard ao clicar no botão Entrar", async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const email = getByTestId('input-email');
    fireEvent.change(email, {target: {value: 'register@register.com.br'}});

    const password = getByTestId('input-password');
    fireEvent.change(password, {target: {value: '123456'}});

    const button = screen.getByRole('button', {name: /Entrar/i});
    fireEvent.click(button);

    expect(screen.getByText(/Simulador de Tinta para estimar Litros nescessario para pintura de uma parede/i)).toBeInTheDocument();

    /* const { pathname } = history.location;
    await expect(pathname).toBe('/dashboard'); */
  });
});
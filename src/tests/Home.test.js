import React from "react";
import { Router } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Home } from "../pages/Home/Home.js";
import '@testing-library/jest-dom';

describe("Página Home.js", () => {
  const history = createMemoryHistory();
  
  it("Testando: 2(Dois) inputs na página Home", () => {
    const { getByText, getAllByRole } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    const inputNode = screen.getByPlaceholderText('Senha')
    expect(getByTestId('input')).toBeDisabled()
  });
  it("Testando: Rota atual está na página home", () => {
    const { getByText, getAllByRole } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    const titulo = getByText(/Calculadora de Tintas/i);
    expect(titulo).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
  /* it("", () => {

  });
  it("", () => {

  }); */
});
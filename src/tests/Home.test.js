import React from "react";
import { Router } from 'react-router-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Home } from "../pages/Home/Home.js";
import renderWithRouter from './RenderRouter';
import '@testing-library/jest-dom';

describe("Página Home.js", () => {
  const history = createMemoryHistory();
  
  it("Testando: 2(Dois) inputs na página Home", () => {
    renderWithRouter(<Home />);

    expect(screen.getByTestId('input-email')).toBeEmptyDOMElement();
    expect(screen.getByTestId('input-password')).toBeEmptyDOMElement();
  });
  it("Testando: Rota atual está na página home", () => {
    renderWithRouter(<Home />);

    const titulo = screen.getByText(/Calculadora de Tintas/i);
    expect(titulo).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
  it("Test: Redirecionar para a página dashboard ao clicar no botão Entrar", async () => {
    renderWithRouter(<Home />);
    
    const email = screen.getByTestId('input-email');
    fireEvent.change(email, {target: {value: 'register@register.com.br'}});

    const password = screen.getByTestId('input-password');
    fireEvent.change(password, {target: {value: '123456'}});

    const button = screen.getByRole('button', {name: /Entrar/i});
    fireEvent.click(button);

    expect(screen.getByText(/Simulador de Tinta para estimar Litros nescessario para pintura de uma parede/i)).toBeInTheDocument();

    /* const { pathname } = history.location;
    await expect(pathname).toBe('/dashboard'); */
  });
});
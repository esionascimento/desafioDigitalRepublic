import React from "react";
import { Router } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Dashboard } from "../pages/Dashboard/Dashboard.js";
import '@testing-library/jest-dom';

describe("Página Dashboard.js", () => {
  const history = createMemoryHistory();
  it("Contem pelo menos dois texto", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Dashboard />
      </Router>
    );
    expect(screen.getByText(/Simulador de Tinta para estimar Litros nescessario para pintura de uma parede/i)).toBeInTheDocument();
  });
});
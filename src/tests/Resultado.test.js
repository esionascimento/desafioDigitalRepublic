import React from "react";
import { screen } from "@testing-library/react";
import { Resultado } from "../pages/Resultado/Resultado.js";
import renderWithRouter from './RenderRouter';
import '@testing-library/jest-dom';

describe("Página Resultado.js", () => {
  it("Contem pelo menos dois texto", () => {
    renderWithRouter(<Resultado />);

    const textFind = screen.getByRole('heading', {
      level: 2,
      name: 'Resultado',
    });
    expect(textFind).toBeDefined();
  });
});
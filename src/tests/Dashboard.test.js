import React from "react";
import { Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Home } from "../pages/Home/Home.js";
import '@testing-library/jest-dom';

describe("Página Dashboard.js", () => {
  const history = createMemoryHistory();
  it("a", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Home />
      </Router>
    );
  });
});
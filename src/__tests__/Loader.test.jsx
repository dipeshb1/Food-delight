import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../Ui/Loader";

describe("Loader component", () => {
  test("renders loader with correct styles and structure", () => {
    render(<Loader />);

    const loaderContainer = screen.getByTestId("loader-container");
    expect(loaderContainer).toBeInTheDocument();
    expect(loaderContainer).toHaveClass("fixed");

    const loaderElement = screen.getByTestId("loader-element");
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass("loader");
  });
});

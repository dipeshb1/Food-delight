import { render, screen } from "@testing-library/react";
import Rating from "../Ui/Rating";
import { expect } from "vitest";

describe("Rating Component", () => {
  test("Renders a green background with rating <4", () => {
    render(<Rating rating={4} />);
    const rating = screen.getByText("4");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass("bg-lime-700");
  });
  test("Renders a red background with rating <3", () => {
    render(<Rating rating={2.4} />);
    const rating = screen.getByText("2.4");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass("bg-red-800");
  });
});

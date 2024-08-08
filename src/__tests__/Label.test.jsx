import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Label from "../Ui/Label";

describe("Label Component", () => {
  test("render the label with veg option", () => {
    render(<Label>Veg</Label>);
    const label = screen.getByText("Veg");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      "rounded-md bg-green-300 px-1 py-1 text-xs uppercase text-green-900 sm:px-1.5",
    );
  });
  test("render the label with non-veg option", () => {
    render(<Label>non-veg</Label>);
    const label = screen.getByText("non-veg");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      "rounded-md bg-red-300 px-1 py-1 text-xs uppercase text-red-900 sm:px-1.5",
    );
  });
  test("render the label with non-veg option", () => {
    render(<Label>Other</Label>);
    const vegLabel = screen.getByText("Veg");
    const nonVegLabel = screen.getByText("Non-veg");

    expect(vegLabel).toBeInTheDocument();
    expect(vegLabel).toHaveClass(
      "rounded-md bg-green-300 px-1 py-1 text-xs uppercase text-green-900 sm:px-1.5",
    );

    expect(nonVegLabel).toBeInTheDocument();
    expect(nonVegLabel).toHaveClass(
      "rounded-md bg-red-300 px-1 py-1 text-xs uppercase text-red-900 sm:px-1.5",
    );
  });
});

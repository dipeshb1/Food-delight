import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Search from "../Ui/Search";

describe("Search component", () => {
  it("renders input with correct placeholder and class names", () => {
    render(<Search setSearchKey={vi.fn()} />);

    const input = screen.getByPlaceholderText("Search restaurants...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("grow");
  });

  it("calls setSearchKey with the correct value when input changes", () => {
    const setSearchKey = vi.fn();
    render(<Search setSearchKey={setSearchKey} />);

    const input = screen.getByPlaceholderText("Search restaurants...");
    fireEvent.change(input, { target: { value: "testing" } });

    expect(setSearchKey).toHaveBeenCalledWith("testing");
  });
});

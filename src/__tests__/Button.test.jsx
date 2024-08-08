import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Button from "../Ui/Button";

describe("Button Component", () => {
  test("renders button with primary type and correct styles", () => {
    render(<Button type="primary">Primary Button</Button>);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "bg-yellow-400 text-stone-800 rounded-md",
    );
  });

  test("renders button with secondary type and correct styles", () => {
    render(<Button type="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText("Secondary Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("border-stone-300 text-stone-400");
  });

  test("renders button with submit type and correct styles", () => {
    render(<Button type="submit">Submit Button</Button>);
    const buttonElement = screen.getByText("Submit Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "bg-yellow-400 text-stone-800 rounded-md",
    );
  });

  test("renders button with red type and correct styles", () => {
    render(<Button type="red">Red Button</Button>);
    const buttonElement = screen.getByText("Red Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-red-200 text-red-700");
  });

  test("renders button with cancel type and correct styles", () => {
    render(<Button type="cancel">Cancel Button</Button>);
    const buttonElement = screen.getByText("Cancel Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("px-2 text-xs");
  });

  test("renders button with delete type and correct styles", () => {
    render(<Button type="delete">Delete Button</Button>);
    const buttonElement = screen.getByText("Delete Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-red-200 text-red-800");
  });

  test("renders button with edit type and correct styles", () => {
    render(<Button type="edit">Edit Button</Button>);
    const buttonElement = screen.getByText("Edit Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-green-300 text-green-800");
  });

  test("button is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByText("Disabled Button");
    expect(buttonElement).toBeDisabled();
  });
  test("button calls onClick handler when clicked", () => {
    const handleClick = vi.fn(); // Use vi.fn() instead of jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByText("Clickable Button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1); // Assert the click handler was called once
  });
});

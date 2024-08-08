import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import LinkButton from "../Ui/LinkButton";

vi.mock("react-router-dom", () => ({
  NavLink: ({ children }) => <div data-testid="navlink">{children}</div>,
}));

describe("LinkButton Component", () => {
  test("Render component with correct class", () => {
    render(<LinkButton to={test}>Testing</LinkButton>);
    const text = screen.getByText("Testing");
    expect(text).toBeInTheDocument();
    expect(screen.getByTestId("navlink")).toBeInTheDocument();
  });
});

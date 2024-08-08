import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import AppLayout from "../Ui/AppLayout";
import { useNavigation } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useNavigation: vi.fn(),
  useNavigate: vi.fn(),
  Outlet: () => <div data-testid="outlet" />,
  NavLink: ({ children }) => <div data-testid="navlink">{children}</div>,
}));
vi.mock("react-hot-toast", () => ({
  Toaster: () => <div data-testid="toaster" />,
}));

describe("AppLayout component", () => {
  it("renders Header and Toaster components", () => {
    useNavigation.mockReturnValue({ state: "idle" });

    render(<AppLayout />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("toaster")).toBeInTheDocument();
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });

  it("shows Loader component when navigation state is loading", () => {
    useNavigation.mockReturnValue({ state: "loading" });
    render(<AppLayout />);
    expect(screen.getByTestId("loader-container")).toBeInTheDocument();
  });

  it("does not show Loader component when navigation state is idle", () => {
    useNavigation.mockReturnValue({ state: "idle" });
    render(<AppLayout />);
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});

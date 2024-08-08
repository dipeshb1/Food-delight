import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Ui/Header";

describe("Header Component", () => {
  test("renders NavLink with correct text and link", () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const linkElement = screen.getByText("Food Delight");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  test("renders Button with correct text and styles", () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const buttonElement = screen.getByText("Add a Restaurant");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("text-sm sm:text-base");
  });
});

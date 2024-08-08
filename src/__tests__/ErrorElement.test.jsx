import { render, screen } from "@testing-library/react";
import ErrorElement from "../Ui/ErrorElement";

test("Rendering error Component", () => {
  render(<ErrorElement />);
  const errorElement = screen.getByText(
    "Hi User, unfortunately you got caught up in some technical issue. Please come back later.",
  );
  expect(errorElement).toBeInTheDocument();
});

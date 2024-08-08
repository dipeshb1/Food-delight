import { render, screen } from "@testing-library/react";
import FormInput from "../Ui/FormInput";
import { expect } from "vitest";

describe("FormInput Component", () => {
  test("renders label and input field correctly", () => {
    render(
      <FormInput
        field="testField"
        labelName="Test Label"
        handleChange={() => {}}
        value=""
        isEditing={false}
        errors=""
      />,
    );

    const labelElement = screen.getByText("Test Label");
    const inputElement = screen.getByRole("textbox");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name");
  });
  test("disables input field when isEditing is true", () => {
    render(
      <FormInput
        field="testField"
        labelName="Test Label"
        handleChange={() => {}}
        value="Test Value"
        isEditing={true}
        errors=""
      />,
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Stats from "../Ui/Stats";

describe("Stats component", () => {
  const sampleData = [
    { rating: "4.5", serves: "veg" },
    { rating: "3.8", serves: "non-veg" },
    { rating: "4.2", serves: "both" },
    { rating: "4.0", serves: "veg" },
    { rating: "2.5", serves: "non-veg" },
    { rating: "5.0", serves: "veg" },
  ];

  it("renders the statistics correctly based on data", () => {
    render(<Stats data={sampleData} />);

    // Total restaurants
    expect(screen.getByText("Total restaurants onboarded:")).toHaveTextContent(
      "6",
    );

    // Restaurants with 4+ rating
    expect(screen.getByText("Restaurants with 4+ rating:")).toHaveTextContent(
      "4",
    );

    // Veg only restaurants
    expect(screen.getByText("Veg only restaurants:")).toHaveTextContent("3");

    // Veg & Non-veg restaurants
    expect(screen.getByText("Veg & Non-veg restaurants:")).toHaveTextContent(
      "3",
    );
  });

  it("renders with no data", () => {
    render(<Stats data={[]} />);

    // Total restaurants
    expect(screen.getByText("Total restaurants onboarded:")).toHaveTextContent(
      "0",
    );

    // Restaurants with 4+ rating
    expect(screen.getByText("Restaurants with 4+ rating:")).toHaveTextContent(
      "0",
    );

    // Veg only restaurants
    expect(screen.getByText("Veg only restaurants:")).toHaveTextContent("0");

    // Veg & Non-veg restaurants
    expect(screen.getByText("Veg & Non-veg restaurants:")).toHaveTextContent(
      "0",
    );
  });
});

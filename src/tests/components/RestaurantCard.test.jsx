import { render, screen } from "@testing-library/react";
import RestaurantCard from "../../components/RestaurantCard";

describe("RestaurantCard", () => {
  const mockRestaurant = {
    name: "The Gourmet Spot",
    cuisines: [
      { uniqueName: "italian", name: "Italian" },
      { uniqueName: "mexican", name: "Mexican" },
    ],
    rating: { starRating: 4.5 },
    address: { city: "London", firstLine: "123 Food Street" },
    logoUrl: "https://example.com/logo.png",
  };

  it("renders the restaurant name", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("The Gourmet Spot")).toBeInTheDocument();
  });

  it("renders the restaurant cuisines", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("Italian")).toBeInTheDocument();
    expect(screen.getByText("Mexican")).toBeInTheDocument();
  });

  it("renders the restaurant rating", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders the restaurant address", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("123 Food Street, London")).toBeInTheDocument();
  });

  it("renders the restaurant logo with the correct src", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/logo.png");
  });
});

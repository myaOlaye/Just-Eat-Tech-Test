// want to test that when we select the order by rating check box, the restaurants ordered properly

import { describe, expect, it } from "vitest";
import RestaurantList from "../../components/RestaurantList";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRestaurants from "../testData";

describe("RestaurantList", () => {
  it("shows the restaurants ordered by rating when the checkbox is selected", () => {
    render(
      <RestaurantList
        restaurants={mockRestaurants.slice(0, 4)}
        loading={false}
      ></RestaurantList>
    );

    const checkBox = screen.getByRole("checkbox");
    const restaurant1 = screen.getByText("The Gourmet Spot");
    const restaurant2 = screen.getByText("Sushi Haven");
    const restaurant3 = screen.getByText("BBQ Brothers");

    expect(restaurant1.compareDocumentPosition(restaurant2)).toBe(4);
    expect(restaurant2.compareDocumentPosition(restaurant3)).toBe(4);

    fireEvent.click(checkBox);

    expect(restaurant2.compareDocumentPosition(restaurant1)).toBe(4);
    expect(restaurant1.compareDocumentPosition(restaurant3)).toBe(4);
  });
});

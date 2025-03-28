import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import App from "../App";
import { describe, expect } from "vitest";
import mockRestaurants from "../tests/testData";

vi.mock("axios");

describe("App", () => {
  it("shows a list of 10 restaurants when a valid postcode is inputted that has 10 or more restaurants", async () => {
    axios.get.mockResolvedValue({
      data: {
        restaurants: mockRestaurants,
      },
    });

    render(<App></App>);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "KT23 4HL" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      const restaurants = screen.getAllByRole("article");
      expect(restaurants.length).toBe(10);
      expect(screen.getByText("The Gourmet Spot")).toBeInTheDocument();
      expect(screen.getByText("Steakhouse Grill")).toBeInTheDocument();
    });
  });
});

it("shows a list of under 10 restaurants when a valid postcode is inputted that has less than 10 restaurants", async () => {
  axios.get.mockResolvedValue({
    data: {
      restaurants: mockRestaurants.slice(0, 5),
    },
  });

  render(<App></App>);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "KT23 4HL" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  await waitFor(() => {
    const restaurants = screen.getAllByRole("article");
    expect(restaurants.length).toBe(5);
    expect(screen.getByText("The Gourmet Spot")).toBeInTheDocument();
    expect(screen.getByText("Vegan Bites")).toBeInTheDocument();
  });
});

it("shows server error message when api request fails", async () => {
  axios.get.mockRejectedValue(new Error("API error"));

  render(<App></App>);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "KT23 4HL" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(
      screen.getByText("Sorry, something went wrong. Please try again later.")
    ).toBeInTheDocument();
  });
});

it("shows not operating in your area message when no restaurants are found for a valid postcode", async () => {
  axios.get.mockResolvedValue({
    data: {
      restaurants: [],
    },
  }); // Assuming Just Eat's API returns an empty array for a valid postcode with no resturants

  render(<App></App>);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "KT23 4HL" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(
      screen.getByText("Sorry, we are not operating in your area yet.")
    ).toBeInTheDocument();
  });
});

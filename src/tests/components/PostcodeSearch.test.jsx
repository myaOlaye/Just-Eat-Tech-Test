import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PostcodeSearch from "../../components/PostcodeSearch";

import { describe, expect } from "vitest";

describe("PostcodeSearch Component", () => {
  it("shows an error message when a user enters an incorrectly formatted postcode", () => {
    render(<PostcodeSearch setRestaurants={vi.fn()}></PostcodeSearch>);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "INVALIDPOSTCODE" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(
      screen.getByText(
        "Please enter a valid postcode in the correct format (e.g., A1 2BC)."
      )
    ).toBeInTheDocument();
  });
});

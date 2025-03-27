import { describe, expect, it } from "vitest";
import isValidPostcode from "../utilities/isValidPostcode";

describe("isValidPostcode", () => {
  it("returns true for a valid UK postcode", () => {
    expect(isValidPostcode("KT23 4HL")).toBe(true);
    expect(isValidPostcode("E16 3NN")).toBe(true);
    expect(isValidPostcode("SW1A 2AA")).toBe(true);
  });
  it("returns false for an invalid UK postcode", () => {
    expect(isValidPostcode("100")).toBe(false);
    expect(isValidPostcode("18235-2239")).toBe(false);
    expect(isValidPostcode("hello")).toBe(false);
  });
});

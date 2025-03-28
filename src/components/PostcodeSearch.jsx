import React, { useEffect, useState } from "react";
import isValidPostcode from "../utilities/isValidPostcode";
import axios from "axios";

const PostcodeSearch = ({ setRestaurants }) => {
  const [postcode, setPostcode] = useState("");
  const [postcodeInput, setPostcodeInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (postcode) {
      setLoading(true);
      setError(false);
      axios
        .get(
          `http://localhost:3001/api/restaurants/${postcode.replace(/\s/g, "")}`
        )
        .then(({ data: { restaurants } }) => {
          if (restaurants.length === 0) {
            setError("Sorry, we are not operating in your area yet.");
          }
          setRestaurants(restaurants.slice(0, 10));
          setLoading(false);
        })
        .catch(() => {
          setError("Sorry, something went wrong. Please try again later.");
        });
    }
  }, [postcode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPostcode(postcodeInput)) {
      setPostcode(postcodeInput);
      setInputError("");
    } else
      setInputError(
        "Please enter a valid postcode in the correct format (e.g., A1 2BC)."
      );
  };

  return (
    <>
      <h2>Search for Restaurants in your Area</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="postcode-input"
          type="text"
          placeholder="Please enter your postcode"
          value={postcodeInput}
          onChange={(e) => {
            setPostcodeInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <p>{inputError}</p>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        postcode && <h3>Restaurants near {postcode}</h3>
      )}
      {}
    </>
  );
};

export default PostcodeSearch;

import React, { useEffect, useState } from "react";
import isValidPostcode from "../utilities/isValidPostcode";
import axios from "axios";
import styles from "./PostcodeSearch.module.css";
import { FaLocationDot } from "react-icons/fa6";

const PostcodeSearch = ({
  setRestaurants,
  loading,
  setLoading,
  setCuisines,
}) => {
  const [postcode, setPostcode] = useState("");
  const [postcodeInput, setPostcodeInput] = useState([]);
  const [inputError, setInputError] = useState("");
  const [error, setError] = useState("");

  // need to get the cuisines and put them in an array

  useEffect(() => {
    if (postcode) {
      setLoading(true);
      setError(false);
      axios
        .get(
          `http://localhost:3001/api/restaurants/${postcode.replace(/\s/g, "")}`
        )
        .then(({ data: { restaurants, cuisineDetails } }) => {
          if (restaurants.length === 0) {
            setError("Sorry, we are not operating in your area yet.");
          }
          setRestaurants(restaurants.slice(0, 10));
          setCuisines(cuisineDetails.map((cuisine) => cuisine.name));
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
    <section className={styles.postcodeSearchSection}>
      <h1 className={styles.heading}>Search for restaurants in your area</h1>
      <form onSubmit={handleSubmit}>
        <FaLocationDot className={styles.icon} />
        <input
          className={styles.postcodeInput}
          id="postcode-input"
          type="text"
          placeholder="Enter your postcode in the format A1 2BC"
          value={postcodeInput}
          onChange={(e) => {
            setPostcodeInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <p className={styles.inputError}>{inputError}</p>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        postcode && <h2>Restaurants near {postcode.toUpperCase()}</h2>
      )}
    </section>
  );
};

export default PostcodeSearch;

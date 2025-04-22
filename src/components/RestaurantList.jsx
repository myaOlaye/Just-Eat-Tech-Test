import { React, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import styles from "./RestaurantList.module.css";

const RestaurantList = ({ restaurants, loading, selectedCuisines }) => {
  const [orderByRating, setOrderByRating] = useState(false);

  const sortedRestaurants = orderByRating
    ? [...restaurants].sort((a, b) => b.rating.starRating - a.rating.starRating)
    : restaurants;

  if (selectedCuisines.length > 0) {
    // const filteredCuisines = sortedRestaurants.map((restaurant) => {
    //   // this is looking like a very time intensive operation ...
    // });

    for (let i = 0; i < restaurants.length; i++) {
      // would need a nested for loop here that then loops through the cuisines array
    }
  }
  // each restaurant object has a cuisines property which is an array of cuisine objects
  // each cuisine object has a name property, which may match one of the cuisines in selectedCuisines
  // if it does, we include it, if it doesnt we filter it out

  return loading ? null : (
    <section className={styles.restaurantListSection}>
      {restaurants.length > 0 && (
        <div className={styles.orderByRatingDiv}>
          <input
            type="checkbox"
            name="orderByRating"
            id="orderByRating"
            checked={orderByRating}
            onChange={() => setOrderByRating(!orderByRating)}
          />
          <label htmlFor="orderByRating" className={styles.orderByRatingLabel}>
            Order by rating
          </label>
        </div>
      )}

      <div className={styles.restaurantList}>
        {sortedRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            ></RestaurantCard>
          );
        })}
      </div>
    </section>
  );
};

export default RestaurantList;

import { React, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import styles from "./RestaurantList.module.css";

const RestaurantList = ({ restaurants, loading }) => {
  const [orderByRating, setOrderByRating] = useState(false);

  const sortedRestaurants = orderByRating
    ? [...restaurants].sort((a, b) => b.rating.starRating - a.rating.starRating)
    : restaurants;

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

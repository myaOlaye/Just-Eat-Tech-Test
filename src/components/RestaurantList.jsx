import React from "react";
import RestaurantCard from "./RestaurantCard";
import styles from "./RestaurantList.module.css";

const RestaurantList = ({ restaurants, loading }) => {
  // add a filter here to ordr restaurants by rating

  return loading ? null : (
    <section className={styles.restaurantListSection}>
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          ></RestaurantCard>
        );
      })}
    </section>
  );
};

export default RestaurantList;

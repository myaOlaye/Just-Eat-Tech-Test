import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants, loading }) => {
  return loading ? null : (
    <>
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          ></RestaurantCard>
        );
      })}
    </>
  );
};

export default RestaurantList;

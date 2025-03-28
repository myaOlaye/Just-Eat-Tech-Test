import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  console.log(restaurants);
  return (
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

import React from "react";

const RestaurantCard = ({
  restaurant: { name, cuisines, rating, address, logoUrl },
}) => {
  return (
    <article>
      <img src={logoUrl}></img>
      <p>{name}</p>
      <ul>
        {cuisines.map((cuisine) => {
          return <li key={cuisine.uniqueName}>{cuisine.name}</li>;
        })}
      </ul>

      <p>{rating.starRating}</p>
      <p>
        {address.city}, {address.firstLine}
      </p>
    </article>
  );
};

export default RestaurantCard;

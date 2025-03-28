import React from "react";
import styles from "./RestaurantCard.module.css";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({
  restaurant: { name, cuisines, rating, address, logoUrl },
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={logoUrl}></img>
      </div>

      <div className={styles.restaurantDetails}>
        <div className={styles.nameAndRating}>
          <p className={styles.restaurantName}>{name}</p>
          <p>
            {rating.starRating}
            <FaStar className={styles.starIcon} />
          </p>
        </div>
        <p className={styles.restaurantAddress}>
          {address.firstLine}, {address.city}
        </p>

        <ul>
          {cuisines.map((cuisine) => {
            return <li key={cuisine.uniqueName}>{cuisine.name}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default RestaurantCard;

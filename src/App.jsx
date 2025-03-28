import "./App.css";
import { useState } from "react";
import PostcodeSearch from "./components/PostcodeSearch";
import RestaurantList from "./components/RestaurantList";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      <PostcodeSearch setRestaurants={setRestaurants}></PostcodeSearch>
      <RestaurantList restaurants={restaurants}></RestaurantList>
    </>
  );
}

export default App;

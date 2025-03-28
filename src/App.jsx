import "./App.css";
import { useState } from "react";
import PostcodeSearch from "./components/PostcodeSearch";
import RestaurantList from "./components/RestaurantList";

function App() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      <PostcodeSearch
        setRestaurants={setRestaurants}
        setLoading={setLoading}
        loading={loading}
      ></PostcodeSearch>
      <RestaurantList
        restaurants={restaurants}
        loading={loading}
      ></RestaurantList>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import PostcodeSearch from "./components/PostcodeSearch";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      <Header></Header>
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

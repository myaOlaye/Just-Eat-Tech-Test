import { useState } from "react";
import PostcodeSearch from "./components/PostcodeSearch";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";
import CuisineSelector from "./components/cuisineSelector";

function App() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  console.log(selectedCuisines, "<--selectedCuisines");
  return (
    <>
      <Header></Header>

      <PostcodeSearch
        setRestaurants={setRestaurants}
        setLoading={setLoading}
        loading={loading}
        setCuisines={setCuisines}
      ></PostcodeSearch>
      <CuisineSelector
        cuisines={cuisines}
        setSelectedCuisines={setSelectedCuisines}
      ></CuisineSelector>
      <RestaurantList
        selectedCuisines={selectedCuisines}
        setRestaurants={setRestaurants}
        restaurants={restaurants}
        loading={loading}
      ></RestaurantList>
    </>
  );
}

export default App;

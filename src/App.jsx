import "./App.css";
import { useState } from "react";
import PostcodeSearch from "./components/PostcodeSearch";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  return (
    <>
      <PostcodeSearch setRestaurants={setRestaurants}></PostcodeSearch>
    </>
  );
}

export default App;

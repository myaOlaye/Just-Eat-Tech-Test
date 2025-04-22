import React from "react";

const CuisineSelector = ({ cuisines, setSelectedCuisines }) => {
  // need to use cuisine array to create a checkbox list for the cuisines
  // need to push selected cuisines into a separate array
  // need to filter restaurant list to only have restaurants that have that cuisine
  // think about how to make this efficient. looping through a long array is not time smart
  // could i use a map of some sort ?

  const handleClick = (e) => {
    const cuisine = e.target.value;
    setSelectedCuisines((currSelectedCuisines) => {
      if (currSelectedCuisines.includes(cuisine)) {
        const selectedCuisinesCopy = [...currSelectedCuisines];
        const index = selectedCuisinesCopy.indexOf(cuisine);
        selectedCuisinesCopy.splice(index);
        return selectedCuisinesCopy;
      }
      return [...currSelectedCuisines, cuisine];
    });
  };
  return (
    <>
      <ul>
        {cuisines.slice(0, 10).map((cuisine) => {
          return (
            <button
              value={cuisine}
              // need to find a way to show that the button has been selected when it is pressed on
              onClick={handleClick}
              key={cuisine}
            >
              {cuisine}
            </button>
          );
        })}
      </ul>
    </>
  );
};

export default CuisineSelector;

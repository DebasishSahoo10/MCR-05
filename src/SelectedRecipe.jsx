import { useContext } from "react";
import { DataContext } from "./Contexts/DataContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const SelectedRecipe = () => {
  const { recipeState } = useContext(DataContext);
  console.log(recipeState);
  const { recipeID } = useParams();
  const selectedRecipe = recipeState.filter((recipe) => recipe.id == recipeID);
  return (
    <>
      <h1>Your Selected Recipe</h1>
      <NavLink to="/">
        <button>Back To Home</button>
      </NavLink>
      <h2>{selectedRecipe[0].name}</h2>
      <p>Type : {selectedRecipe[0].type}</p>
      <img src={selectedRecipe[0].img} alt="" width={200} height={200} />
      <h4>Instructons :</h4>

      {selectedRecipe[0].instructions.toString()}
      <h4>Ingredients : </h4>
      {selectedRecipe[0].ingredients.toString()}
    </>
  );
};

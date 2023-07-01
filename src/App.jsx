import { useContext, useState } from "react";
import "./App.css";
import { DataContext } from "./Contexts/DataContext";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

function App() {
  const [searchFilter, setSearchFilter] = useState("name");
  const [searchQueries, setSearchQueries] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    id : "",
    name: "",
    type: "",
    img: "",
    ingredients: "",
    instructions: "",
  });
  const { recipeState, dispatch } = useContext(DataContext);
  // console.log(recipeState)

  const filteredState = recipeState.filter((recipe) => {
    if (searchFilter === "name") {
      return recipe.name.toLowerCase().includes(searchQueries.toLowerCase());
    } else if (searchFilter === "ingridients") {
      return recipe.ingredients
        .toString()
        .includes(searchQueries.toLowerCase());
    } else {
      return recipe.type.toLowerCase().includes(searchQueries.toLowerCase());
    }
  });
  // console.log(filteredState)

  const handleNewRecipeSave = () => {
    if (
      newRecipe.name === "" ||
      newRecipe.type === "" ||
      newRecipe.img === "" ||
      newRecipe.ingredients === "" ||
      newRecipe.instructions === ""
    ) {
      setInputError(true);
      return;
    }
    setDialogOpen(false);
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
  };

  return (
    <div>
      <h1>Recipe Menu</h1>
      <div id="filters">
        <input type="text" onChange={(e) => setSearchQueries(e.target.value)} />
        <div>
          <p>Search Filters</p>
          <label htmlFor="name">Name</label>
          <input
            type="radio"
            name="name"
            id="name"
            checked={searchFilter === "name"}
            value="name"
            onClick={(e) => setSearchFilter(e.target.value)}
          />
          <label htmlFor="ingridients">Ingrideients</label>
          <input
            type="radio"
            name="ingridients"
            id="ingridients"
            checked={searchFilter === "ingridients"}
            value="ingridients"
            onClick={(e) => setSearchFilter(e.target.value)}
          />
          <label htmlFor="cuisine">Cuisine</label>
          <input
            type="radio"
            name="cuisine"
            id="cuisine"
            checked={searchFilter === "cuisine"}
            value="cuisine"
            onClick={(e) => setSearchFilter(e.target.value)}
          />
        </div>
      </div>
      <ul
        style={{
          paddingInlineStart: "0",
          listStyle: "none",
          display: "flex",
          gap: "20px",
        }}
      >
        {filteredState.map((recipe) => {
          return (
            <li key={recipe.name}>
              <NavLink to={`/recipe/${recipe.id}`}>
                <img src={recipe.img} alt="" width={120} height={120} />
                <h3>{recipe.name}</h3>
                <p>{recipe.type}</p>
                <p>Instructions Here</p>
                <p>Ingridients Here</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => setDialogOpen(true)}>Add A Recipe</button>
      </div>
      <dialog open={dialogOpen} style={{ position: "fixed", top: "50%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {inputError && <h3>Inputs can not be blank</h3>}
          <label htmlFor="">Recipe Name</label>
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, name: e.target.value }))
            }
          />

          <label htmlFor="">Recipe Type</label>
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, type: e.target.value }))
            }
          />

          <label htmlFor="">Ingredients</label>
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, ingredients: e.target.value }))
            }
          />

          <label htmlFor="">Image Link</label>
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, img: e.target.value, id : uuid() }))
            }
          />

          <label htmlFor="">Instructions</label>
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe((prev) => ({
                ...prev,
                instructions: e.target.value,
              }))
            }
          />

          <button onClick={() => handleNewRecipeSave()}>Save</button>
        </div>
      </dialog>
    </div>
  );
}

export default App;

/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const recipeData = [
  {
    id : 1,
    name: "Spaghetti One",
    img: "https://i0.wp.com/www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg?resize=760%2C984&ssl=1",
    type: "Italian",
    ingredients: ["soda", "eggs", "flours", "salt", "butter"],
    instructions: [
      "1. Testing One Butter",
      "2.Testing Two Salt",
      "3.Testing Four Wheat",
    ],
  },
  {
    id : 2,
    name: "Chicken One",
    img: "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.683xw:1.00xh;0.221xw,0&resize=1200:*",
    type: "Indian",
    ingredients: ["chicken", "eggs", "flours", "salt", "butter"],
    instructions: [
      "1. Testing One Chicken",
      "2.Testing Two Masaala",
      "3.Testing Four Spices",
    ],
  },
  {
    id : 3,
    name: "Choco One",
    img : "https://cdn.shopify.com/s/files/1/2130/0231/products/PZ0038.jpg?v=1670441531&width=1100",
    type: "Belzian",
    ingredients: ["chcolate", "eggs", "flours", "salt", "butter"],
    instructions: [
      "1. Testing One Butter",
      "2.Testing Two Salt",
      "3.Testing Four Wheat",
    ],
  },
];

export const DataContext = createContext();
const handleRecipe = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE" : return [...state, action.payload]
    default: return state;
  }
};
export const DataProvider = ({ children }) => {
  const [recipeState, dispatch] = useReducer(handleRecipe, recipeData);
  return (
    <>
      <DataContext.Provider value={{ recipeState, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

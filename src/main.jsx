import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./Contexts/DataContext.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SelectedRecipe } from "./SelectedRecipe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recipe/:recipeID" element={<SelectedRecipe/>}/>
        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);

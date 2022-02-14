import React from "react";
import RecipePost from "./RecipePost";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr
          >
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody
        >
          <RecipePost recipes={recipes} deleteRecipe={deleteRecipe} />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

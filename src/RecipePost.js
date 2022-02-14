import React from "react";

function RecipePost({ recipes, deleteRecipe }) {
  return recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td>
            <img className="scale-down" src={photo} alt="Ignore" />
          </td>
          <td className="content_td">
            <p>{ingredients}</p>
          </td>
          <td className="content_td">
            <p>{preparation}</p>
          </td>
          <td>
            <button name="delete" onClick={() => deleteRecipe(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
  );
}
export default RecipePost;

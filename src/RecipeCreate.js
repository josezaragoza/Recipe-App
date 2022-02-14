import React, { useState } from "react";

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  function RecipeCreate({ recipes, setRecipes }) {
    const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    };

    const [formData, setFormData] = useState({ ...initialFormState });
    const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setRecipes([...recipes, formData]);
      setFormData({ ...initialFormState });
    };

    return (
      <form
        name="create"
        onSubmit={handleSubmit}
      >
        <table>
          <tbody>
            <tr>
              <td htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                  required={true}
                />
              </td>
              <td htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  required={true}
                />
              </td>
              <td htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                />
              </td>
              <td htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="textarea"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  required={true}
                />
              </td>
              <td htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="textarea"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                  required={true}
                />
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }

export default RecipeCreate;

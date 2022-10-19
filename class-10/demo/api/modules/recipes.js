'use strict';

const axios = require('axios');

const cache = {};

const getRecipes = (request, response) => {
  const ingredient = request.query.ingredient;

  // check if the ingredient is in the cache
  if (cache[ingredient] !== undefined) {
    console.log('getting info from cache: ', ingredient);
    response.status(200).send(cache[ingredient]);
  } else {
    console.log('getting new API data from axios...', ingredient);
    const url = `https://api.edamam.com/search?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&q=${ingredient}`;
    
    axios
      .get(url)
      .then(recipesResponse => {
        const recipeArray = recipesResponse.data.hits.map(recipe => new Recipe(recipe.recipe));
        // create a new property on the cache that is the search term 
        // the value is going to be the new recipeArray we just created
        cache[ingredient] = recipeArray;
        console.log('putting the new data in cache: ', cache);
        response.status(200).send(recipeArray);
      })
      .catch(error => {
        console.error(error);
        response.status(500).send(error); // normally this would be a next()
      })
  }

}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

module.exports = getRecipes;

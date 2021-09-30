import '../component/food-list.js';
import '../component/search-bar.js';


import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const receipeListElement = document.querySelector("food-list");
    const clearFilterElement = document.querySelector("#clearFilter");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = () => {
        searchRecipe(searchElement.value);
    };

    const searchRecipe = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.searchRecipe(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        loaderElement.style.display = 'none';
        receipeListElement.receipes = results;
    };

    const fallbackResult = message => {
        loaderElement.style.display = 'none';
        receipeListElement.renderError(message);
    };

    // Default List Receipe
    searchRecipe('desserts');

    // Search Receipe
    searchElement.clickEvent = onButtonSearchClicked;

  
};

export default main;
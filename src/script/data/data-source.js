class DataSource {
    static searchRecipe(keyword) {
        return fetch(`https://api.spoonacular.com/recipes/search?apiKey=13a38ba464614721ba87fdb0652ea0eb&query=${keyword}&number=12`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }

}

export default DataSource;
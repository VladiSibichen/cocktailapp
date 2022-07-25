export default class Api{
    private static baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

    static getRandomCocktail: Function = async ()=>{
        const response = await fetch(
            `${this.baseURL}random.php`);
        // return Promise
        return await response.json();
    }

    static getCocktailById: Function = async (id:string) => {
        const response = await fetch(
            `${this.baseURL}lookup.php?i=${id}`);
        return await response.json();
    }
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

    static searchByIngredient: Function = async (ingredientName:string)=>{
        const response = await fetch(
            `${this.baseURL}filter.php?i=${ingredientName}`);
        return await response.json();
    }
    static getCategories: Function = async ()=>{
        const response = await fetch(
            `${this.baseURL}list.php?c=list`);
        // return Promise
        return await response.json();
    }
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
    static getCategoryFiltered: Function = async (category:string)=>{
        const response = await fetch(
            `${this.baseURL}filter.php?c=${category}`);
        return await response.json();
    }
}
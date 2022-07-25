import Cocktail from "../model/Cocktail";
import CocktailInList from "../model/CocktailInList";
import Category from "../model/Category";

export default interface Repository{
    getRandomCocktail: ()=>Promise<Cocktail>;
    getCocktailByID: (id:string)=>Promise<Cocktail>;
    //searchByIngredient: ()=>Promise<CocktailInList>;
    getCategories: ()=>Promise<Array<Category>>;
    getCategoryFiltered: (
        category: string, limit: number)=>Promise<Array<CocktailInList>>;
}
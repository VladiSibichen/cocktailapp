import Repository from "../../data/repository/cocktailRepository";
import Cocktail from "../model/Cocktail";
// use case
export default async function getCocktailById(id:string):Promise<Cocktail>{
    return new Repository().getCocktailByID(id);
}
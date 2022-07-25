import Repository from "../../data/repository/cocktailRepository";
import Cocktail from "../model/Cocktail";
// use case
export default async function getRandomCocktail():Promise<Cocktail>{
    return new Repository().getRandomCocktail()
}
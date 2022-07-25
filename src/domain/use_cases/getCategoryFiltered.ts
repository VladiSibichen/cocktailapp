import Repository from "../../data/repository/cocktailRepository";
import CocktailInList from "../model/CocktailInList";
// use case
export default async function getCategoryFiltered(
    category:string,
    limit:number = 7):Promise<Array<CocktailInList>>{
    return new Repository().getCategoryFiltered(category, limit);
}
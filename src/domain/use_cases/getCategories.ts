import Category from "../model/Category";
import Repository from "../../data/repository/cocktailRepository";
// use case
export default async function getCategories():Promise<Array<Category>>{
    return new Repository().getCategories();
}
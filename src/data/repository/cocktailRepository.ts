import Api from "../source/api";
import Cocktail from "../../domain/model/Cocktail";
import Category from "../../domain/model/Category";
import CocktailInList from "../../domain/model/CocktailInList";
import Repository from "../../domain/repository/repository";

export default class CocktailRepository implements Repository{
    async getCategories(): Promise<Array<Category>> {
        const res = await Api.getCategories();
        const resArray = res.drinks.map((item:any)=>{
                return new Category(item.strCategory, item.strCategory);
            }
        );
        return new Promise(resolve => {
            resolve(resArray)
        })
    }

    async getCategoryFiltered(category: string, limit: number): Promise<Array<CocktailInList>> {
        const res = await Api.getCategoryFiltered(category);
        const resArray = res.drinks.slice(0,limit)
        return new Promise( resolve => {
            resolve(resArray.map((item:any)=>new CocktailInList(item)));
        });
    }

    async getCocktailByID(id: string): Promise<Cocktail> {
        const res = await Api.getCocktailById(id); //then()
        const cocktailData = res.drinks[0];
        return new Promise((resolve)=>{
            resolve(new Cocktail(cocktailData));
        });
    }

    async getRandomCocktail(): Promise<Cocktail> {
        const res = await Api.getRandomCocktail(); //then()
        const cocktailData = res.drinks[0];
        return new Promise((resolve)=>{
            resolve(new Cocktail(cocktailData));
        });
    }
}
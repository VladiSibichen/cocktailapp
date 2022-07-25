import FakeApi from "../source/fake_api";
import Cocktail from "../../domain/model/Cocktail";
import Repository from "../../domain/repository/repository";
import Category from "../../domain/model/Category";
import CocktailInList from "../../domain/model/CocktailInList";

export default class FakeRepository implements Repository{
    async getCategories(): Promise<Array<Category>> {
        const res = await FakeApi.getCategories();
        const resArray = res.drinks.map((item:any)=>item.strCategory);
        return new Promise(resolve => {
            resolve(resArray)
        })
    }

    async getCategoryFiltered(category: string, limit: number): Promise<Array<CocktailInList>> {
        return Promise.resolve(
            []
        );
    }

    async getCocktailByID(id: string): Promise<Cocktail> {
        const res = await FakeApi.getCocktailById(id); //then()
        console.log(res);
        return new Promise((resolve)=>{
            resolve(new Cocktail(res));
        });
    }

    async getRandomCocktail(): Promise<Cocktail> {
        const res = await FakeApi.getRandomCocktail(); //then()
        console.log(res);
        return new Promise((resolve)=>{
            resolve(new Cocktail(res));
        });
    }

}
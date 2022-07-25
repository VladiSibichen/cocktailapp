import Cocktail from "./Cocktail";

export default class CocktailInList{
    id: string;
    name: string;
    thumb: string;

    // TODO define type
    constructor(json: any) {
        this.id = json.idDrink;
        this.name = json.strDrink;
        this.thumb = json.strDrinkThumb;
    }

    static fromCocktail(cocktail: Cocktail):CocktailInList{
        return new CocktailInList({
            idDrink: cocktail.id,
            strDrink: cocktail.name,
            strDrinkThumb: cocktail.thumb
        })
    }
}
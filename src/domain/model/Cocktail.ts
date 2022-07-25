import Ingredient from "./Ingredient";

export default class Cocktail{
    id: string;
    name: string;
    category: string;
    alcoholic: string;
    instructionsEN: string;
    instructionsIT: string;
    instructionsDE: string;
    thumb: string;
    ingredients: Array<Ingredient>;
    imageSource: string;

    // TODO rename type
    constructor(json: any) {
        this.id = json.idDrink;
        this.name = json.strDrink;
        this.category = json.strCategory;
        this.alcoholic = json.strAlcoholic;
        this.instructionsEN = json.strInstructions;
        this.instructionsIT = json.strInstructionsIT;
        this.instructionsDE = json.strInstructionsDE;
        this.thumb = json.strDrinkThumb;
        this.imageSource = json.strImageSource;

        this.ingredients = this.getIngredients(json);
    }

    // TODO rename type
    private getIngredients(json:any) {
        let res = [];
        for (let i=1; i<=15; i++){
            let name = json['strIngredient'+i];
            if(name!=null){
                res.push(new Ingredient(name, json['strMeasure'+i]));
            }
        }
        return res;
        /*return [
            new Ingredient('cocoa','10 g'),
            new Ingredient('milk','100 ml'),
            new Ingredient('sugar','tea spoon')
        ];*/
    }
}
/*
   "idDrink" - cocktail ID,
   "strDrink" - cocktail name,
   "strCategory" - cocktail category,
    "strAlcoholic" - contains alcohol,
    "strInstructions" - instructions on English,
    "strInstructionsDE" - instructions on Deutsch,
    "strInstructionsIT" - instructions on Italian,
    "strDrinkThumb" - thumb of cocktail,
    "strIngredientN" - ingredient or null,
    "strMeasureN" - measure of ingredient or null,
    "strImageSource" - image of cocktail
* */
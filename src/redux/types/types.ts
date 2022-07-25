import CocktailInList from "../../domain/model/CocktailInList";
import Cocktail from "../../domain/model/Cocktail";

export interface Store{
    history: History,
    cocktailData: CocktailInfo
}

export interface History{
    savedHistory: Array<CocktailInList>
}

export interface CocktailInfo{
    isLoading: boolean,
    data: Cocktail | object
}
import getRandomCocktail from "../domain/use_cases/getRandomCocktail";
import Cocktail from "../domain/model/Cocktail";
import {Action} from "./Action";

export const getRandomCocktailAction = ():any => {
    return (dispatch:Function) => {
        dispatch(startRandomLoadAction());
        getRandomCocktail().then((data)=>{
            console.log(JSON.stringify(data));
            dispatch(setRandomCocktailDataAction(data));
        });
    }
};
export const START_RANDOM_LOAD = "start_random_load";
export const SET_RANDOM_COCKTAIL_DATA = "set_random_cocktail_data";

export const startRandomLoadAction = () => ({
        type: START_RANDOM_LOAD
    });
export const setRandomCocktailDataAction = (data:Cocktail) => ({
    type: SET_RANDOM_COCKTAIL_DATA,
    payload: data
})

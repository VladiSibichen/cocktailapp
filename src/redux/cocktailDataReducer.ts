import {SET_RANDOM_COCKTAIL_DATA, START_RANDOM_LOAD} from "./asyncActions";
import {Action} from "./Action";
import {CocktailInfo} from "./types/types";

export function cocktailDataReducer(
    state:CocktailInfo = {isLoading: true, data:{}}, action: Action){
    switch (action.type){
        case START_RANDOM_LOAD:{
            return { ...state, isLoading: true};
        }
        case SET_RANDOM_COCKTAIL_DATA:{
            return {...state, isLoading: false, data:action.payload};
        }
        default:{
            return state;
        }
    }
}
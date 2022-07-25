import CocktailInList from "../domain/model/CocktailInList";
import {Action} from "./Action";

export const SAVE_HISTORY = "save_history";

export const saveHistory = (item:CocktailInList) =>
    ({
        type: SAVE_HISTORY,
        payload: item
    });
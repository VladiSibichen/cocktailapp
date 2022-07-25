import {SAVE_HISTORY} from "./historyActions";
import saveRecentItems from "../domain/use_cases/saveRecentItems";
import {Action} from "./Action";
import CocktailInList from "../domain/model/CocktailInList";
import {History} from "./types/types";

function historyReducer(state:History = {savedHistory:[]}, action: Action){
    switch (action.type){
        case SAVE_HISTORY:{
            const array:Array<CocktailInList> = state.savedHistory;
            const item:CocktailInList = action.payload;
            if(!array.find((itemArr: CocktailInList) => itemArr.id === item.id)) {
                array.push(item);
            }
            saveRecentItems(array);
            return {...state, savedHistory: [...array]};
        }
        default:{
            return state;
        }
    }
}

export default historyReducer;
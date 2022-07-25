import LocalStorageManager from "../../data/source/localStorageManager";
import CocktailInList from "../model/CocktailInList";

export default interface HistoryRepository{
    getRecentItems: ()=>Array<CocktailInList>;
    saveRecentItems: (list:Array<CocktailInList>)=>void;
}
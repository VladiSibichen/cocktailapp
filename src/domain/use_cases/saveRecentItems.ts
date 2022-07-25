import Repository from "../../data/repository/historyRepository";
import CocktailInList from "../model/CocktailInList";

export default function saveRecentItems(list:Array<CocktailInList>): void {
    return new Repository().saveRecentItems(list);
}
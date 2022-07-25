import Repository from "../../data/repository/historyRepository";
import CocktailInList from "../model/CocktailInList";

export default function getRecentItems():Array<CocktailInList>{
    return new Repository().getRecentItems();
}
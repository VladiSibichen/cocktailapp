import LocalStorageManager from "../source/localStorageManager";
import CocktailInList from "../../domain/model/CocktailInList";
import HistoryRepository from "../../domain/repository/historyRepository";

export default class HistoryRepositoryLocalStorage implements HistoryRepository{
    getRecentItems(): Array<CocktailInList> {
        return LocalStorageManager.getItems();
    }
    saveRecentItems(list: Array<CocktailInList>): void {
        LocalStorageManager.saveItems(list);
    }
}
export default class LocalStorageManager{
    private static ITEMS_KEY = "history_items"

    // TODO update type
    static getItems():Array<any>{
        const itemsStr = localStorage.getItem(this.ITEMS_KEY);
        if(itemsStr == null){
            return [];
        } else {
            return JSON.parse(itemsStr) as Array<any>;
        }
    }

    // TODO update type
    static saveItems(list:Array<any>):void{
        localStorage.setItem(this.ITEMS_KEY, JSON.stringify(list));
    }
}
let lastId = 0;
export default class Ingredient{
    id: number;
    name: string;
    measure: string;

    constructor(name:string, measure:string) {
        this.id = lastId;
        this.name = name;
        this.measure = measure;
        lastId++;
    }
}
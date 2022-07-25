export default class Category{
    categoryUrl: string;
    categoryName: string;

    constructor(categoryUrl: string, categoryName: string) {
        this.categoryUrl = categoryUrl;
        this.categoryName = categoryName;
    }
}
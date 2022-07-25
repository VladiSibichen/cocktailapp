export default function toCategoryURL(category: string): string{
    return category.replace('/','_');
}
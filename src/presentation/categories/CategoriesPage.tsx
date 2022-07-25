import React, {useEffect, useState} from 'react';
import getCategories from "../../domain/use_cases/getCategories";
import Loader from "../general/Loader";
import CategoryCocktailsList from "./CategoryCocktailsList";
import {Link, Route, Routes} from "react-router-dom";
import CocktailReactWithId from "../general/CocktailReactWithId";
import {routes} from "../navigation/routes";
import toCategoryURL from "../../domain/use_cases/toCategoryURL";
import Category from "../../domain/model/Category";

const CategoriesPage: React.FC = () => {
    const [categories, setCategories] = useState<Array<Category>>([]);
    const getCategoriesRequest = () => {
        getCategories().then((data: Category[]) => {
            console.log(JSON.stringify(data));
            setCategories(data);
        })
    };
    useEffect(() => {
        getCategoriesRequest();
    }, []);
    return (categories) ? (
        <>
            <div>
                {categories.map(item => {
                    return <Link key={toCategoryURL(item.categoryName)}
                                 to={`/${routes.categories}/${
                                     toCategoryURL(item.categoryName)}`}>
                        <li style={styleTheme.li}>
                            {item.categoryName}</li>
                    </Link>
                })}
            </div>
            <div style={styleTheme.mainContainer}>
                <div style={styleTheme.listContainer}>
                    <CategoryCocktailsList/>
                    <h5>Shakes:</h5>
                    <CategoryCocktailsList categoryName={'Shake'}/>
                </div>
                <div style={styleTheme.detailBlock}>
                    <CocktailReactWithId/>
                </div>
            </div>
        </>

    ) : <Loader/>;
}

const styleTheme = {
    li: {display: "inline-block", padding: "12px", cursor: "pointer", background: 'yellowgreen'},
    mainContainer: {
        display: "flex", height: "100px",
        marginTop: "16px"
    },
    listContainer: {flexGrow: "2"},
    detailBlock: {flexGrow: "5"}
}

export default CategoriesPage;
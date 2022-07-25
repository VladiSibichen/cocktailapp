import React from 'react';
import {routes} from "./routes";
import RandomCocktailPage from "../random_cocktail/RandomCocktailPage";
import SearchByIdPage from "../search_by_id/SearchByIdPage";
import {Route, Routes} from "react-router-dom";
import RecentPage from "../recent/RecentPage";
import CategoriesPage from "../categories/CategoriesPage";

const Main = () => {
    return <Routes>
        <Route path="/" element={<RandomCocktailPage/>}/>
        <Route path={`/${routes.random}`} element={<RandomCocktailPage/>}/>
        <Route path={`/${routes.searchById}`} element={<SearchByIdPage/>}/>

        <Route path={`/${routes.categories}`} element={<CategoriesPage/>}/>
        <Route path={`/${routes.categories}/:categoryParam`} element={<CategoriesPage/>}/>
        <Route path={`/${routes.categories}/:categoryParam/:id`} element={<CategoriesPage/>}/>

        <Route path={`/${routes.recent}`} element={<RecentPage/>}/>
        <Route path={`/${routes.recent}/:id`} element={<RecentPage/>}/>
    </Routes>
};

export default Main;
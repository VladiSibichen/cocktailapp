import React, {useContext} from 'react';
import RecentCocktailItem from "../random_cocktail/RecentCocktailItem";
import CocktailReactWithId from "../general/CocktailReactWithId";
import {Route, Routes, useParams} from "react-router-dom";
import {routes} from "../navigation/routes";
import {useSelector} from "react-redux";
import {Store} from "../../redux/types/types";
import Cocktail from "../../domain/model/Cocktail";
import CocktailInList from "../../domain/model/CocktailInList";

function RecentPage() {
    const savedHistory = useSelector<Store, Array<CocktailInList>>(
        state => state.history.savedHistory);
    return (
        <div style={styleTheme.mainContainer}>
            <div style={styleTheme.listContainer}>
            {
                savedHistory.map((item)=>{
                    return <RecentCocktailItem cocktail={item} key={item.id}/>
                })
            }
            </div>
            <div style={styleTheme.detailBlock}>
                <CocktailReactWithId/>
            </div>
        </div>
    );
}
const styleTheme = {
    mainContainer:{display:"flex", height:"100px",
        marginTop:"16px"},
    listContainer:{flexGrow:"2"},
    detailBlock:{flexGrow:"5"}
}
export default RecentPage;
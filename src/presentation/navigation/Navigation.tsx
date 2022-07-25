import React, {useContext} from 'react';
import {routes} from "./routes";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Store} from "../../redux/types/types";
import CocktailInList from "../../domain/model/CocktailInList";

const Navigation = () => {
    const savedHistory = useSelector<Store,Array<CocktailInList>>(state =>
        state.history.savedHistory
    );
    return (
        <ul className="nav nav-pills">
            <Link to={`/${routes.random}`}>
                <li className="nav-item nav-link">
                    Random
                </li>
            </Link>
            <Link to={`/${routes.searchById}`}>
                <li className="nav-item nav-link">
                    Search by id
                </li>
            </Link>
            <Link to={`/${routes.categories}`}>
                <li className="nav-item nav-link">
                    Categories
                </li>
            </Link>
            <Link to={`/${routes.recent}`}>
                <li className="nav-item nav-link">
                    Recent ({savedHistory.length})
                </li>
            </Link>
        </ul>
    );
};

const primaryColor = "salmon";
const styleTheme = {
    ul:{height:"40px", background:primaryColor},
    li:{display:"inline-block", padding:"12px", cursor:"pointer"}
}

export default Navigation;
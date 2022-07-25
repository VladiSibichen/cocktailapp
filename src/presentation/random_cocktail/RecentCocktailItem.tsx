import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "../navigation/routes";
import CocktailInList from "../../domain/model/CocktailInList";

interface Props{
    cocktail:CocktailInList
}

const CategoryCocktailsItem:React.FC<Props> = (props:Props)=>{
    return (
        <>
            <Link to={`/${routes.recent}/${props.cocktail.id}`}
                  style={theme.itemStyle} >
                <img src={props.cocktail.thumb} style={theme.imgThumb}/>
                <span style={theme.titleStyle}>{props.cocktail.name}</span>
            </Link><br/>
        </>
    );
}

const theme = {
    itemStyle:{border:"1px solid grey", cursor:"pointer"},
    imgThumb:{width:"40px", height:"40px"},
    titleStyle:{lineHeight:"40px", align:"center-vertical"}
}

export default CategoryCocktailsItem;
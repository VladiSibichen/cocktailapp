import React, {useContext, useEffect} from "react";
import Loader from "./Loader";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux"
import CocktailInList from "../../domain/model/CocktailInList";
import {saveHistory} from "../../redux/historyActions";
import Cocktail from "../../domain/model/Cocktail";

interface Props{
    dataCocktail:Cocktail
}

const CocktailReact:React.FC<Props> = (props:Props)=>{
    const cocktail = props.dataCocktail;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(cocktail){
            console.log(cocktail);
            dispatch(saveHistory(CocktailInList.fromCocktail(cocktail)))
        }
    },[props.dataCocktail]);
    console.log("Ingredients - "+cocktail.ingredients);
    return (cocktail)?(<div>
        <h3>{cocktail.name}</h3>
        <p>{cocktail.category}</p>
        <p>{cocktail.alcoholic}</p>
        <p>{cocktail.instructionsEN}</p>
        <img src={`${cocktail.thumb}/preview`}/>
        {
            cocktail.ingredients.map((ingredient)=>{
                return (ingredient.measure == null)?
                    <p key={ingredient.id}>{ingredient.name}</p>:
                    <p key={ingredient.id}>{ingredient.name} - {ingredient.measure}</p>
            })
        }
    </div>):<Loader/>
}
/*
 generateKey(){
        return Math.round(Math.random()*1000);
    }
* */

export default CocktailReact;
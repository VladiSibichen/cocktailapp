import React, {useEffect, useState} from 'react';
import CocktailReact from "../general/CocktailReact";
import {useDispatch, useSelector} from "react-redux";
import {getRandomCocktailAction} from "../../redux/asyncActions";
import Loader from "../general/Loader";
import Cocktail from "../../domain/model/Cocktail";
import {Store} from "../../redux/types/types";

const RandomCocktailPage:React.FC = () => {
    const data = useSelector<Store, object | Cocktail>(
        state => state.cocktailData.data);

    const dispatch = useDispatch();
    const [cocktailData, setCocktailData] = useState<Cocktail>();
    useEffect(()=>{
        dispatch(getRandomCocktailAction());
    },[]);
    useEffect(()=>{
        console.log(JSON.stringify(data));
        if(data && JSON.stringify(data)!="{}"){
            setCocktailData(data as Cocktail);
        }
    },[data]);
    return (
        <div>
            {/*(!isLoading)?<CocktailReact dataCocktail={data}/>:<Loader/>*/}
            {(cocktailData)?<CocktailReact dataCocktail={cocktailData as Cocktail}/>:<Loader/>}
        </div>
    );
}

export default RandomCocktailPage;
import React, {Component, useState} from 'react';
import ControlForm from "./ControlForm";
import getCocktailById from "../../domain/use_cases/getCocktailById";
import CocktailReact from "../general/CocktailReact";
import Loader from "../general/Loader";
import Cocktail from "../../domain/model/Cocktail";

const SearchByIdPage = ()=>{
    const [cocktailData, setCocktailData] = useState<Cocktail>();
    const handleGetById = (id:string) =>{
        getCocktailById(id).then((data)=>{
            console.log(JSON.stringify(data));
            setCocktailData(data);
        });
    }
    return (<div>
        <ControlForm onGetById={handleGetById}/>
        {(cocktailData)?<CocktailReact dataCocktail={cocktailData as Cocktail}/>:<Loader/>}
    </div>);
}

export default SearchByIdPage;
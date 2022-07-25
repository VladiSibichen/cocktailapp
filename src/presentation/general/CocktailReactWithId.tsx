import React, {useEffect, useState} from "react";
import Loader from "./Loader";
import getCocktailById from "../../domain/use_cases/getCocktailById"
import CocktailReact from "./CocktailReact";
import {useParams} from "react-router-dom";
import Cocktail from "../../domain/model/Cocktail";

const CocktailReactWithId:React.FC<any> = (props:any)=>{
    const [cocktail,setCocktail] = useState<Cocktail>();
    let {id} = useParams();
    console.log("ID - "+id);
    const getCocktailServer = (props:any)=>{
        let receivedId = (props.cocktailId) ? props.cocktailId : id;
        console.log(receivedId);
        if(receivedId){
            getCocktailById(receivedId.toString()).then((data:Cocktail)=>{
                console.log(JSON.stringify(data));
                if(data && JSON.stringify(data)!="{}"){
                    setCocktail(data);
                }
            })
        }
    };
    useEffect(()=>{
        console.log("Use effect");
        getCocktailServer(props);
    }, [props.cocktailId, id]);

    return <div>
        {(cocktail)? <CocktailReact dataCocktail={cocktail as Cocktail}/>:<Loader/>}
    </div>

}

export default CocktailReactWithId;
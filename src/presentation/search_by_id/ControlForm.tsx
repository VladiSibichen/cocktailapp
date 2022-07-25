import React, {useState} from "react";

interface Props{
    onGetById:Function
}

const ControlForm:React.FC<Props> = (props:Props) => {
    const [searchId, setSearchId] = useState(null);
    const searchIdChanged = (event:any)=>{
        setSearchId(event.target.value.trim());
    }
    const getCocktailById = ()=>{
        props.onGetById(searchId);
    }
    return <div>
        <input type={"number"} onChange={searchIdChanged}/>
        <button onClick={getCocktailById}>Get By Id</button>
    </div>
}
export default ControlForm;
import React from "react";

const Loader:React.FC = ()=>{
    return <div className="lds-ripple"
                style={{position:'fixed', top:'20vh', left:'45vw'}}>
        <div></div>
        <div></div>
    </div>
}

export default Loader
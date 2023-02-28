import React from "react";

function FunctionalComp(props){
    return (
        <div>
        <p>This is paragraph in functional component.</p>
        <h1>{props.title}</h1>
        </div>
    )
}
export default FunctionalComp;
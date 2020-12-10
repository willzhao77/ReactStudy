import React, { useState } from "react";
import { render } from "react-dom";


function Hello (props){
    console.log(props)
    return <div>Hello component--- {props.name}</div>
}

const dog = {
    name : "dahuang",
    age: 3,
    gender: 'male'
}


render(<div>
 <Hello name={dog.name}></Hello>       
</div>  
,document.getElementById('root'))
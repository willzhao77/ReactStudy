import React, { useState } from "react";
import { render } from "react-dom";


import Hello from '@/components/Hello'



const dog = {
    name : "dahuang",
    age: 3,
    gender: 'male'
}


render(<div>
 <Hello name={dog.name}></Hello>       
</div>  
,document.getElementById('root'))
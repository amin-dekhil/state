import React, { useState } from "react" 
const Card =({data})=> {
    console.log(data); 
    const{FullName ,Bio , Profession} = data;
return (
    <div>

<h1>{FullName}</h1>

<h2>{Profession}</h2>
<p>{Bio}</p>

    </div>
)

}


export default Card 
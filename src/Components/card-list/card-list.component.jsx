import React from 'react';
import './card-list.style.css';

import {Card} from '../card/card.component';

//render list of components
export const CardList = (props)=>{
return <div className="card-list">{
    //prop.childre is the parameters that is given inside open/close tags ex. <h1>parameter</h1>
   props.monsters.map((monster)=>(
            <Card key={monster.id} monster={monster}/>
          ))
}
</div>;
}
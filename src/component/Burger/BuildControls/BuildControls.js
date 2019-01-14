import React from 'react';
import  './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'; 

const buildControls =(props)=> {

    return (
        <div className='BuildControls'>
        <p className='price'>Current Price: {props.totalPrice + ' RS'}</p>
        {props.ingredients.map(ctrl =>
              <BuildControl
                key={ctrl.name}
                label={ctrl.label}
                addItems={() =>props.addItems(ctrl.name)}
                removeItems={() =>props.removeItems(ctrl.name)} 
                disable={ctrl.disable}
              />
       )} 
        <button disabled={props.totalPrice===10} className='btn btn-success btn-lg' onClick={props.openModal}> Order Burger </button>
        </div>
    );
}

export default buildControls;
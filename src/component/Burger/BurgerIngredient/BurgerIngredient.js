import React, { Component } from 'react';
import './BurgerIngredient.css';


class BurgerIngredient extends Component {
  render() {    
    let ingredient =null;
    
    switch (this.props.type) {
            case('bread-bottom'):  
               ingredient =<div className='BreadBottom'>&emsp;</div>;
               break;
            
            case('bread-top'):  
               ingredient =(<div className='BreadTop'>&emsp;
                            <div className='Seeds1'>&emsp;</div>
                            <div className='Seeds2'>&emsp;</div>
                            
                            </div> 
                           );
               break;
            
            case('meat'):  
               ingredient =<div className='Meat'>&emsp;</div>;
               break;
            
            case('cheese'):  
               ingredient =<div className='Cheese'>&emsp;</div>;
               break;
            
            case('bacon'):  
               ingredient =<div className='Bacon'>&emsp;</div>;
               break;
            
            case('salad'):  
               ingredient =<div className='Salad'>&emsp;</div>;
               break;
            
            default:
               ingredient =null;         
    }   
    return ingredient;
  }    
}
            
export default BurgerIngredient;           
            
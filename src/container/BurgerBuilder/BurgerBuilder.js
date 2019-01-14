import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls'; 
import Modal from '../../component/UI/Modal/Modal'; 
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';

class BurgerBuilder extends Component{

      constructor(){
          super();
          
          this.state={
              ingredients:[
                  {name:'salad', label:'Salad', qty:0, price:5, disable:true},
                  {name:'bacon', label:'Bacon', qty:0, price:6, disable:true},
                  {name:'cheese', label:'Cheese', qty:0, price:7, disable:true},
                  {name:'meat', label:'Meat', qty:0, price:10, disable:true},         
              ],
              totalPrice:10,
              isModalOpen:false
          }
              
          this.addItems= (type)=> {
              const updatedIngredients= this.state.ingredients.map(ingredient =>{
              if(ingredient.name === type)
              {
                  ingredient.qty++;
                  ingredient.disable= false;
                  this.state.totalPrice= this.state.totalPrice + ingredient.price;
              }     
                return ingredient;
            });
              
           this.setState({
              ingredients: [].concat(updatedIngredients),        
          })}
          
          this.removeItems= (type)=> {
              const updatedIngredients= this.state.ingredients.map(ingredient =>{
            if(ingredient.name === type)
             {
                   if(ingredient.qty > 0)
                   {
                       ingredient.qty--;
                       ingredient.disable= false;
                       this.state.totalPrice= this.state.totalPrice - ingredient.price;
                   } 
                   if(ingredient.qty === 0)
                   {
                       ingredient.disable= true;
                   } 
             }
               return ingredient;
            });
              
           this.setState({
              ingredients: [].concat(updatedIngredients),      
          })}
          
          this.openModal=()=> {
              this.setState(
                  {isModalOpen: true}       
              )
          }
          
          this.closeModal=()=> {
              this.setState(
                  {isModalOpen: false}       
              )
          }
          
          this.continuePurchase=()=> {
             
              this.setState(
              {
                  ingredients:[
                      {name:'salad', label:'Salad', qty:0, price:5, disable:true},
                      {name:'bacon', label:'Bacon', qty:0, price:6, disable:true},
                      {name:'cheese', label:'Cheese', qty:0, price:7, disable:true},
                      {name:'meat', label:'Meat', qty:0, price:10, disable:true},         
                  ],
                  totalPrice:10,
                  isModalOpen:false
            })}    
      }
    
  render() { 
    return (
       <div> 
          
          { this.state.isModalOpen ? <Modal ingredients={this.state.ingredients} isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} continuePurchase={this.continuePurchase} totalPrice={this.state.totalPrice} /> : null
          }
          <Burger ingredients={this.state.ingredients} />
          <BuildControls removeItems={this.removeItems} addItems={this.addItems} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} openModal={this.openModal} />
       </div>   
    );
  }
}

export default BurgerBuilder;

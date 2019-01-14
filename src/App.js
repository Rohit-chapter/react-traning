import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/header';
import PersonPanel from './component/Persons/PersonPanel';
import PersonDetail from './component/Persons/PersonDetail';
import PersonAdd from './component/Persons/PersonAdd';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' component={PersonPanel} exact></Route>
          <Route path='/persondetail/:id' component={PersonDetail}></Route>
          <Route path='/add' component={PersonAdd} ></Route>
          <Route path='/burger' component={BurgerBuilder}></Route>
        </Switch>
      </div>
    );
  }
}

//https://codepen.io/hoehoe/pen/dReKLX?editors=1010

export default App;

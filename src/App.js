import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './components/Button';
import Result from './components/Result';
import CardList from './GithubCards/CardsList';
import Form from './GithubCards/Form';



class App extends Component {
 
  
  state={
    cards:[]
  }
  
   addNewCard=(cardInfo)=>{
     this.setState(prevState=>({
        cards:prevState.cards.concat(cardInfo)
     }))
   }

  render() {

    


    return (
      <div className="App">     
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;

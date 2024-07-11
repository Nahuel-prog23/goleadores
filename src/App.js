import React from "react";
import List from './components/List';
import './App.css';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  
  
  const jugadores = [{name:"Edison Cavani",goles:13},
    {name:"Miguel Merentiel",goles:11},
    {name:"Kevin Zenon",goles:4},
    {name:"Cristian Medina",goles:2}];

  return (
    <div className="Caja">    
      <List list={jugadores}/>
    </div>
  );


}

export default App;

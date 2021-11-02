import React , { Component } from 'react';
import './App.css';
import ListItems from './Components/ListItems/ListItmes'
import AddItems from './Components/AddItmes/AddItms';

class App extends Component {
  state = {
    items : [
      {id:0 , name:'omar'  , age:20 },
      {id:1 , name:'mohamed'  , age:30 },
      {id:2 , name:'ahmed'  , age:40}
    ]
  }

  handleDelete = (id)=> {
    let items =this.state.items.filter( item=>{
      if(item.id !== id)
        return item
    })
    this.setState({items:items})
  } 

  addItem = (item)=> {
    item.id =Math.random()
    let items =this.state.items
    items.push(item)
    this.setState({items})
  }

  render () {
    return (
      <div className="App container ">  
        <ListItems  items={this.state.items} handleDelete={this.handleDelete} />
        <AddItems AddItems={this.addItem} />
      </div>
    );
  }
}

export default App;

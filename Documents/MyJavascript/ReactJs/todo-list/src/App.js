import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/Header.js';
import Addtodo from './components/Addtodo.js';


class App extends Component{
  state={
    todos:[
      {
        id:1,
        title:'Take out trash',
        completed:false
      },
      {
        id:2,
        title:'Dinner with wife',
        completed:false
      },
      {
        id:3,
        title:'Back home and sleep',
        completed:false
      }
    ]
  }

  deletetodo=todo_id=>{
    this.setState({todos:this.state.todos.filter(t=>t.id!==todo_id)})
  }

  markcomplete=todo_id=>{

  this.setState({todos:this.state.todos.map(t=>
    {if(t.id===todo_id)
    {
      t.completed = !t.completed
      console.log(t.completed)
    }
    return t;
  })});
  }

  addtodo=(title)=>{
    const newtodo={
      id:4,
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos, newtodo]})
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <Header />
          <Addtodo addtodo={this.addtodo}/>
          {this.state.todos.map(t => <Todos todos={t}  DeleteTodo=
          {this.deletetodo} markcomplete={this.markcomplete}/>)}

        </div>
      </div>
        
      
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  state={
    newTodo:'',
    todos:[
      {id:1, texte:"Je mange"},
      {id:2, texte:"je danse"},
      {id:3, texte:"Je chante"}
    ]
  }

  handleChange=(event)=>{
    this.setState({newTodo:event.target.value});
    //console.log(event.target.name, event.target.value);
  }

  addTodo=()=>{
    //console.log('clicked');
    const newTodo={
      texte:this.state.newTodo,
      id:this.state.todos[this.state.todos.length-1].id+1
       
    }
    const Todos=this.state.todos;
    Todos.push(newTodo);
    this.setState({todos:Todos, newTodo:''});
    
    //console.log(Todos); 
  }

  deleteTodo=(index)=>{
    const todos=this.state.todos;
    delete todos[index];
    this.setState({todos:todos});
    console.log(index);
  }

  render(){
    //console.log(this.state.newTodo)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div className="container">
          <input type="text" name="todo" placeholder='Add todo' className="my-4 form-control" onChange={this.handleChange}/>
          <button onClick={this.addTodo} className="btn-info mb-3 form-control">Add Todo</button>

          <ul className="list-group">
            
            {this.state.todos.map(todo=>
              <li className="list-group-item" key={todo.id}>
                {todo.texte}
                <button onClick={()=>{this.deleteTodo(todo.id)}} className="btn-sm ml-4 btn btn-danger">X</button>
              </li>  
            )}

          </ul>

        </div>
      </div>
      
        
      
    );
  }
  
}

export default App;

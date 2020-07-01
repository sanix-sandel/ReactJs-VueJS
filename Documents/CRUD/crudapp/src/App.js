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

  render(){
    console.log(this.state.newTodo)
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
          <input type="text" name="todo" className="my-4 form-control" onChange={this.handleChange}/>

          <ul className="list-group">
            
            {this.state.todos.map(todo=>
              <li className="list-group-item" key={todo.id}>{todo.texte}</li>  
            )}

          </ul>

        </div>
      </div>
      
        
      
    );
  }
  
}

export default App;

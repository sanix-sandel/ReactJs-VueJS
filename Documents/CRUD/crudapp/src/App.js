import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem.js'


class App extends Component{
  state={
    newTodo:'',
    editingId:false,
    todos:[
      {id:0, texte:"Je mange"},
      {id:1, texte:"je danse"},
      {id:2, texte:"Je chante"}
    ],
    editing:false
  }

  generateTodoId=()=>{
    const lastTodo=this.state.todos[this.todos.length-1];
    if (lastTodo){
      return lastTodo.id+1;
    }
    return 1;
  }

  handleChange=(event)=>{
    this.setState({newTodo:event.target.value});
    //console.log(event.target.name, event.target.value);
  }

  addTodo=()=>{
    //console.log('clicked');
    const newTodo={
      texte:this.state.newTodo,
     // id:this.state.todos[this.state.todos.length-1].id+1
      id:this.generateTodoId
    }
    const Todos=this.state.todos;
    Todos.push(newTodo);
    this.setState({todos:Todos, newTodo:''});
    
    //console.log(Todos); 
  }

  deleteTodo=(index)=>{
    const todos=this.state.todos;
    delete todos[index];
    this.setState({todos});
    //console.log(index);
  }

  editTodo=(id)=>{
    const todo=this.state.todos[id];
    this.setState({editing:true, newTodo:todo.texte, editingId:id});
  }

  updateTodo=()=>{
    const todo=this.state.todos[this.state.editingId];
    todo.texte=this.state.newTodo;

    const todos=this.state.todos;
    todos[this.state.editingId]=todo;
    this.setState({
      todos,
      editing:false,
      editingId:null,
      newTodo:''
    })
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

          
          <input type="text" 
            name="todo" 
            placeholder='Add todo' 
            className="my-4 form-control" 
            onChange={this.handleChange}
          />

          <button 
            onClick={this.state.editing ? this.updateTodo:this.addTodo} 
            className="btn-info mb-3 form-control"
            disabled={this.state.newTodo.length < 5}
          >
            {this.state.editing ? 'Update':'Add Todo'}
          </button>
          {
            <ul className="list-group">
            
              {this.state.todos.map(todo=>
                <ListItem todo={todo}
                  key={todo.id} 
                  editTodo={()=>{this.editTodo(todo.id)}}
                  deleteTodo={()=>{this.deleteTodo(todo.id)}}
                />
            )}

           </ul>
          }
          

        </div>
      </div>
      
        
      
    );
  }
  
}

export default App;

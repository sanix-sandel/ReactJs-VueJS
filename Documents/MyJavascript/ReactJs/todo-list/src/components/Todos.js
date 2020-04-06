import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todos extends Component{
    getstyle=()=>{
        return {
            borderBottom:'1px #ccc dotted',
            padding:'10px',
            background:'#f4f4f4',
            textDecoration:this.props.todos.completed ? 'line-through':'none'
        }    
    }
         
    render(){
        return(
            

            <div style={this.getstyle() } >
                <p>
                    <input type='checkbox' onChange={()=>this.props.markcomplete(this.props.todos.id)}/>
                        {this.props.todos.title}
                    <button style={btnstyle} onClick={()=>this.props.DeleteTodo(this.props.todos.id)}>x</button>
                </p>
               
            </div>
        );
    }
}

const btnstyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}


Todos.propTypes={
    todos:PropTypes.object.isRequired
}

export default Todos;
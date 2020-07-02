import React from 'react'

const ListItem=(props)=>{

    return<li className="list-group-item" >
        <button onClick={props.editTodo} className="btn-sm mr-4 btn btn-info">
            U
        </button>
                
        {props.todo.texte}
                
        <button onClick={props.deleteTodo} className="btn-sm ml-4 btn btn-danger">
            X
        </button>
    </li>  

}

export default ListItem;
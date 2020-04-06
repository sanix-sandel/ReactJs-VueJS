import React, {Component} from 'react';

function Header(){
    
    return(
        <header style={headerstyle}>
            <h1>
                Todo
            </h1>
        </header>
    )
}
const headerstyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
export default Header;
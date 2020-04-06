import React, {Component} from 'react';

class Addtodo extends Component{
    state={
        title:''
    }

    onChange = (e)=>this.setState({title:e.target.value});

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({title:''})
    }

    render(){
        return(
            <form  onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input
                type='text'
                name='title'
                style={{flex:'10', padding:'5px'}}
                placeholder='Add todo...'
                value={this.state.title}
                onChange={this.onChange}
                
                />

                <input
                type='submit'
                value='Submit'
                className='btn'
                />
                
            </form>
        )

    }
}

export default Addtodo;
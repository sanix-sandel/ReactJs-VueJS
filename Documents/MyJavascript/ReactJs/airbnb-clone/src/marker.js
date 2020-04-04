import React , {Component} from 'react';
import './marker.css'


class Marker extends Component{
    
   
    render(){
        let classes="marker";
        if (this.props.selectedflat){
            classes+=" selected"
        }
        return(
            <div className={classes} >
                {this.props.text}
            </div>
        );
    }
}

export default Marker;
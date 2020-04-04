import React ,{Component} from 'react'; 
import './flat.css';


class Flat extends Component{
    title=this.props.flat.price+this.props.flat.priceCurrency+
    " - "+this.props.flat.name;
    
    style={
        backgroundImage: `url('${this.props.flat.imageUrl}')`
    }
   
    render(){
        return(
            <div className="flat" onClick={()=> this.props.clic(this.props.flat.id)}>
                <div className="flat-picture" style={this.style}>
                    
                </div>
                <div className="flat-title">
                    {this.title}
                </div>
            </div>
        );
    }
}

export default Flat;
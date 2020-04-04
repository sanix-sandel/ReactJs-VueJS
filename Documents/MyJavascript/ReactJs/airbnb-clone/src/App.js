import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './flat.js';
import Marker from './marker.js';

class App extends Component{
    
    state={
        flats:[],
        selectedflat:null
    }

    componentDidMount(){
        const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    flats:data
                });
        })
        
    };

    handleclick=flat_id =>{
        const flat=this.state.flats.filter(flat => flat.id===flat_id)
        console.log(flat[0].id)
        this.setState({selectedflat:flat[0]})
    }
    
    render(){
        
       
        let center={
            lat:48.8566,
            lng:2.3522
        }
        
        if (this.state.selectedflat){
            this.center={
                lat:this.state.selectedflat.lat,
                lng:this.state.selectedflat.lng
            }
        }

        return (
            <div className="app">
                <div className="main">
                    <div className="search">
                    </div>
                    <div className="flats">
                        {this.state.flats.map( flat => 
                            <Flat key={flat.id} flat={flat} clic={this.handleclick}/>
                        )}
                        
                       
                    </div>
                </div>
                <div className="map">
                    <GoogleMapReact
                        
                        defaultCenter={center}
                        defaultZoom={11}
                    >
                        {this.state.flats.map(flat=>
                            <Marker 
                            lat={flat.lat}
                             
                            key={flat.id} 
                            lng={flat.lng}
                            text={flat.price+"$"}
                            selectedflat={flat===this.state.selectedflat} />
                            )}
                    </GoogleMapReact>
                   

                </div>
            </div>
            
            
        );
    }
}

export default App;

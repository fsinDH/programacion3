import React, {Component} from 'react'; 
import "./Card.css";

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculasPopulares : [],
            peliculasCartelera : [],
            DetallePeliculas : [],
            verMas: false,
        }
        console.log (this.props)
        
    }
    vermas = () => {
        this.setState({verMas: !this.state.verMas}) 
    }
  render() {
    let {poster_path, title, overview} = this.props.pelicula
    return (
        <>
        <div className="peliculas-card mb-4">
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/>
            <h4>{title}</h4>
            <button className="btn btn-info" onClick={this.vermas}>Ver Mas</button>
            {this.state.verMas == false? <></> :<p>{overview}</p> }
            
        </div>
        </>
    )
  }
}

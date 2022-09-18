/* import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'; */
import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'
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

    vermenos = () => {
        this.setState({verMas: this.state.verMas})
    }

    handleFavoritos = () => {
        this.setState({boton: !this.state.boton}, ()=>{this.props.favoritos(this.props.pelicula)})
    }

    render() {
    
    let {poster_path, title, overview, id} = this.props.pelicula
    
    return (
        <>
        <div className="peliculas-card mb-4">
            
            <Link to={`./DetallePeliculas/${id}`}>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/>
            </Link>

            {/* El Link altera el CSS */}
            {/* <Link to='./DetallePeliculas'> */}
            <h4>{title}</h4>
            {/* </Link> */}

            <button className="btn btn-info" onClick={this.vermas}>
                {this.state.verMas === true? <></> : "Ver Más"}
                {this.state.verMas === false? <></> : "Ver Menos"}
            </button>
            {this.state.verMas === false? <></> :<p>{overview}</p> }
            
            <button onClick={()=> this.handleFavoritos()}>{this.state.boton ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
            
        </div>
        </>
    )
    }
}

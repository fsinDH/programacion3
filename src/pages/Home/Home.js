import React, {Component} from 'react';
import Card from '../../components/Card/Card'
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            peliculasPopulares : [],
            peliculasCartelera : [],
        }
    }
componentDidMount(){

        const urlCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2a48645239a84bc2697fe8c66fc6dc00'
            fetch(urlCartelera)
                .then( response => response.json() )
                .then( data => {
                    console.log(data)
                    this.setState({peliculasCartelera: data.results.slice(0,5)})
                })
                .catch( error => console.log('El error fue: ' + error)) 
        

        const urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=2a48645239a84bc2697fe8c66fc6dc00'
                fetch(urlPopulares)  
                    .then( response => response.json() )
                    .then( data => {
                        console.log(data)
                        this.setState({peliculasPopulares: data.results.slice(0,5)})
                    })
                    .catch( error => console.log('El error fue: ' + error))
    }                

    render (){
        return(
            <div>
                <h1>Peliculas en Cartelera</h1> <Link to='/PeliculasEnCartelera'>Ver Todas</Link>
                {
                    this.state.peliculasCartelera.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculasCartelera.map(pelicula => (
                    <Card
                    pelicula = {pelicula}
                    />
                ))
                }
                <h1>Peliculas en Populares</h1> <Link to='/PeliculasPopulares'>Ver Todas</Link>
                {
                    this.state.peliculasPopulares.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculasPopulares.map(pelicula => (
                    <Card
                    pelicula = {pelicula}
                    />
                ))
                }
            </div>
        )
    }
}

export default Home;
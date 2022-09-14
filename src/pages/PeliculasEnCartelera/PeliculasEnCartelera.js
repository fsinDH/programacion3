import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import "./Cartelera.css"


export default class PeliculasEnCartelera extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            peliculasCartelera : [],
        }
    }

    componentDidMount(){
        const urlCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2a48645239a84bc2697fe8c66fc6dc00'
            fetch(urlCartelera)
                .then( response => response.json() )
                .then( data => {
                    console.log(data)
                    this.setState({peliculasCartelera: data.results})
                })
                .catch( error => console.log('El error fue: ' + error)) 
    }
  render() {
      return (
        <>
            <h1 className='titulo'>Peliculas en Cartelera</h1> 
                <div className='cartelera'>
                {
                    this.state.peliculasCartelera.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculasCartelera.map(pelicula => (
                    <Card
                    pelicula = {pelicula}
                    />
                    ))
                }
                </div>
            )
        </>
      )}
}

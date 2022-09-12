import React, { Component } from 'react'
import Card from '../../components/Card/Card'

export default class PeliculasPopulares extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            peliculasPopulares : [],
        }
    }

    componentDidMount(){
        const urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=2a48645239a84bc2697fe8c66fc6dc00'
            fetch(urlPopulares)
                .then( response => response.json() )
                .then( data => {
                    console.log(data)
                    this.setState({peliculasPopulares: data.results})
                })
                .catch( error => console.log('El error fue: ' + error)) 
    }
  render() {
      return (
        <>
            <h1>Peliculas Populares</h1> 
                {
                    this.state.peliculasPopulares.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculasPopulares.map(pelicula => (
                    <Card
                    pelicula = {pelicula}
                    />
                    ))
                }
            )
        </>
      )}
}
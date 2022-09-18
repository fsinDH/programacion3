import React, {Component} from 'react';
import Card from '../../components/Card/Card'
import {Link} from 'react-router-dom'
import "./Home.css"

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            peliculasPopulares : [],
            peliculasCartelera : [],
            favoritos: [],
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
    handleFavoritos(card){
        if (this.state.favoritos.some(fav => card.id === fav.id)) {
            this.setState({favoritos: this.state.favoritos.filter(item => item.id !== card.id)}, () => {
                localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
            })
            console.log(this.state.favoritos.filter(item => item.id !== card.id))
        } else {
            this.setState({favoritos: [...this.state.favoritos, card]}, () => {
                localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
            })
        }
    }
    
    

    render (){
        return(
            <div className='peliculas'>
                <h1 className='Carteleras'>Peliculas en Cartelera</h1> <Link className='verTodas' to='./PeliculasEnCartelera'>Ver Todas</Link>
                <div className='catalogo'>
                {
                    this.state.peliculasCartelera.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculasCartelera.map(pelicula => (
                    <Card
                    key={pelicula.id}
                    pelicula = {pelicula}
                    favoritos={(fav) => this.handleFavoritos(fav)}
                    />
                ))
                }
                </div>
                
                <h1 className='Carteleras'>Peliculas en Populares</h1> <Link className='verTodas' to='./PeliculasPopulares'>Ver Todas</Link>
                <div className='catalogo'>
                {
                    this.state.peliculasPopulares.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculasPopulares.map(pelicula => (
                    <Card
                    key={pelicula.id}
                    pelicula = {pelicula}
                    favoritos={(fav) => this.handleFavoritos(fav)}
                    />
                ))
                }
                </div>
            </div>
        )
    }
}

export default Home;
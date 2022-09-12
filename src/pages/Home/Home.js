import React, {Component} from 'react';
import Card from '../../components/Card/Card'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            peliculas : [],
        }
    }
    componentDidMount(){
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=2a48645239a84bc2697fe8c66fc6dc00'
        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data)
                this.setState({peliculas: data.results})
            })
            .catch( error => console.log('El error fue: ' + error)) 
    }
   
    render (){
        return(
            <div>
                {
                    this.state.peliculas.length == 0?
                    <p>Cargando</p>
                    :this.state.peliculas.map(pelicula => (
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
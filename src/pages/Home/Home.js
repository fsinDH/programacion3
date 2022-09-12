import React, {Component} from 'react';
import Card from '../../components/Card/Card'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            peliculas : ""
        }
    }
    componentDidMount(){
const url = 'https://api.themoviedb.org/3/movie/550?api_key=2a48645239a84bc2697fe8c66fc6dc00'
        fetch(url)
            .then( response => response.json() )
            .then( data => console.log(data))
            .catch( error => console.log('El error fue: ' + error)) 
    }
   
    render (){
        return(
            <div>
                fasdfasdfasdf
{/*                 {
                this.state.peliculas.map(pelicula => (
                    <Card
                    pelicula= {pelicula}
                    />
                ))
                }
 */}            </div>
        )
    }
}

export default Home;
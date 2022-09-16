import React, {Component} from 'react'; 
import "./header.css"
import Card from '../../components/Card/Card'
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap" rel="stylesheet"></link>

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            filterBy:'',
            resultados:[],
        }
        console.log (this.props)
        
    }

    PeliculasFiltradas(palabra){
        if (palabra === ""){
            return
        } else {

        const url = `https://api.themoviedb.org/3/search/movie?api_key=2a48645239a84bc2697fe8c66fc6dc00&language=en-US&query=${palabra}`
        
        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                return this.setState({
                resultados: datos.results,
            })
        })
        .catch( err => console.log(err))}
    }

    handleChange(e){
        this.setState({
          filterBy: e.target.value
        },()=>{
          this.PeliculasFiltradas(this.state.filterBy)
        })
    }


    render(){
    return (
    <>
        <header className="header">
            <div className="container">
                    <h1 className='logo'>Cuevana 5</h1>
                    
                    <div class="botones">
                        <a href="/">Home</a>
                    </div>

                    <div class="botones">
                        <a href="favourite.html">Favoritos</a>
                    </div>

                    <div class="botones">
                        <a href="PeliculasPopulares">Peliculas Populares</a>
                    </div>

                    <div class="botones">
                        <a href="PeliculasEnCartelera">Peliculas en Cartelera</a>
                    </div>

                    {/* <div className="buscador">
                        <form method="GET">
                                <input className= "search" type="text" name="buscador" placeholder="Buscar.." value="" />
                                <button type="submit">Enviar</button>
                        </form>
                    </div> */}

                    <div class="flexbox">
                        <div class="search"> 
                            <div>
                                <form className='formBusqueda' method="GET">
                                    <input type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.filterBy} placeholder="Search . . ." required/>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                        
            </div>
                
        </header>
        {/* Hace que el form filtre por los buscados */}
            { this.state.cargando === false ? (<p>Cargando</p>) : 
            (this.state.resultados.map(resultado => (<Card key={resultado.id} pelicula={resultado}/>)))} 
    </>
    )
    }
}


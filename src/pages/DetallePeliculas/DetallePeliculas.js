import React, { Component } from 'react'

export default class DetallePeliculas extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: this.props.match.params.id,
            detalle: {},
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=2a48645239a84bc2697fe8c66fc6dc00`)
        .then(res => res.json())
        .then(data => {
            console.log (data)
                return this.setState({
                    detalle : data
                })
        })
        .catch(err => console.log(err))
    }
    
    render(){
        const img = 'https://image.tmdb.org/t/p/original';

        return(
            <>
                <img src={img + this.state.detalle.poster_path} alt={this.state.detalle.title}/>
                <h1> {this.state.detalle.title} </h1>
                <p> Calificacion: {this.state.detalle.vote_average} </p>
                <p> Fecha de estreno: {this.state.detalle.release_date} </p>
                <p> Duracion: {this.state.detalle.runtime} </p>
                <p> Sinopsis: {this.state.detalle.overview} </p>
            </>
        )
     }
}   






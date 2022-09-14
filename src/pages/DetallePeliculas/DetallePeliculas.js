import React, { Component } from 'react'

export default class DetallePeliculas extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: this.props.match.params.id,
            DetallePeliculas: {},
        }
    }   
}

componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
    .then(res => res.json())
    .then(data => {
        console.log (data)
            return this.setState({
                DetallePeliculas: data
            })
    })
    .catch(err => console.log(err))
}
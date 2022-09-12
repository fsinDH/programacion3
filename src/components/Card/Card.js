import React from 'react'; 
import "./Card.css";

function Card(props){
    console.log (props)
    let {poster_path, title, overview} = props.pelicula
    return (
        <>
            <div className="peliculas-card mb-4">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/>
                <h4>{title}</h4>
                <p>{overview}</p>
            </div>
        </>
    )
}
export default Card;


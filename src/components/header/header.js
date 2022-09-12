import React from 'react';
import "./header.css"
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap" rel="stylesheet"></link>

export default function Header() {
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
                        <a href="index.html">Peliculas Populares</a>
                    </div>

                    <div class="botones">
                        <a href="index.html">Peliculas en Cartelera</a>
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
                                    <input type="text" placeholder="Search . . ." required/>
                                </form>
                            </div>
                        </div>
                    </div>

            </div>

        </header>
    </>
    )
}


import React from 'react';
import "./header.css"

export default function Header() {
    return (
    <>
        <header className="header">
            <div className="container">
                    <a><img className="logo" src="./logo.png" alt=" Views logo"></img></a>
                    
                    <div class="botones">
                        <a href="App.js">Home</a>
                    </div>

                    <div class="botones">
                        <a href="favourite.html">Favoritos</a>
                    </div>

                    <div class="botones">
                        <a href="index.html">Ver Mas</a>
                    </div>

                    <div className="buscador">
                        <form method="GET">
                                <input className= "search" type="text" name="buscador" placeholder="Buscar.." value="" />
                                <button type="submit">Enviar</button>
                        </form>
                    </div>
            </div>
        </header>
    </>
    )
}


import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'

import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home';
import PeliculasPopulares from './pages/PeliculasPopulares/PeliculasPopulares';
import PeliculasEnCartelera from './pages/PeliculasEnCartelera/PeliculasEnCartelera';
import NotFound from './pages/NotFound/NotFound'
import Detallepeliculas from './pages/DetallePeliculas/DetallePeliculas'
import Favoritos from './pages/Favoritos/Favoritos';


function App() {
  return (
    <>
       <Header titulo="Cuevana 5" />
        {/* <Container /> */}
        <Switch>
          <Route path="/" exact={true} component={Home} /> 
          <Route path="/PeliculasPopulares" component={PeliculasPopulares}/>
          <Route path="/PeliculasEnCartelera" component={PeliculasEnCartelera}/>
          <Route path="/NotFound" component={NotFound}/>
          <Route path="/Detallepeliculas" component={Detallepeliculas}/> 
          <Route path="/Favoritos" component={Favoritos}/>
        </Switch>
        
      <Footer /> 
    </>
    );  
}

export default App;

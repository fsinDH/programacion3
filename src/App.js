import React from 'react'
import {Route} from 'react-router-dom'

import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home';
import PeliculasPopulares from './pages/PeliculasPopulares/PeliculasPopulares';
import PeliculasEnCartelera from './pages/PeliculasEnCartelera/PeliculasEnCartelera';


function App() {
  return (
    <>
       <Header titulo="Cuevana 5" />
        {/* <Container /> */}
        <>
          <Route path="/" exact={true} component={Home} /> 
          <Route path="/PeliculasPopulares" component={PeliculasPopulares}/>
          <Route path="/PeliculasEnCartelera" component={PeliculasEnCartelera}/>
        </>
      <Footer /> 
    </>
    );  
}

export default App;

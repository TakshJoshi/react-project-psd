// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar'
import Slide1 from './components/slide1'
import Leader from './components/leader'
import Numbers from './components/numbers'
import Contact from './components/contact'
import About from './components/about'
import Gallery from './components/gallery'
import Footer from './components/footer'
// import dotted from "./assets/dotted.png";


// import Card from "./components/card";


// import './App.scss';

function App() {

  return (
    <>
    <Navbar />
    <Slide1 />
    <Leader />
    <Numbers />
    <Contact/>
    <About/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default App
 
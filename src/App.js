import './App.css';

import { Header } from './components/Header';
import { SliderSection } from './components/sliderSection/SliderSection';
import { AboutSection } from './components/aboutSection/AboutSection';

import { useState, useEffect } from "react";
import * as firstService from './services/firstService';

import { Routes, Route } from 'react-router-dom';


function App() {


    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        firstService.getAll()
            .then(result => {
                setPokemons(result)
            })
    }, []);




    return (
        <>
            <Header />


            <main id='main-content'>
                <Routes>

                    <SliderSection />
                    <AboutSection pokemons={pokemons} />
                    
                </Routes>

            </main>
        </>


    );
}

export default App;

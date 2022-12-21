import './App.css';

import { Header } from './components/Header';
import { SliderSection } from './components/sliderSection/SliderSection';
import { AboutSection } from './components/aboutSection/AboutSection';

import { useState, useEffect } from "react";
import * as firstService from './services/firstService';



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


            <main>
                <SliderSection />
                <AboutSection pokemons={pokemons}/>

            </main>
        </>


    );
}

export default App;

import './App.css';

import { Header } from './components/Header';
import { SliderSection } from './components/sliderSection/SliderSection';
import { AboutSection } from './components/aboutSection/AboutSection';
import { ServiceSection } from './components/serviceSection/ServiceSection';
import { PortfolioSection } from './components/portfolioSection/PortfolioSection';
import { NewsSection } from './components/newsSection/NewsSection';
import { ContactSection } from './components/contactSection/ContactSection';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { PokemonDetails } from './components/aboutSection/PokemonDetails';

import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import * as pokemonService from './services/pokemonService';


function App() {


    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        pokemonService.getAll()
            .then(result => {
                setPokemons(result)
            })
    }, []);



    return (
        <>
            <Header />


            <main id='main-content'>
                <Routes>

                    <Route path='/' element={<SliderSection />} />
                    <Route path='/about' element={<AboutSection pokemons={pokemons} />} />
                    <Route path='/service' element={<ServiceSection />} />
                    <Route path='/portfolio' element={<PortfolioSection />} />
                    <Route path='/news' element={<NewsSection />} />
                    <Route path='/contact' element={<ContactSection />} />

                    <Route path='/showme/:showMeThatPokemon' element={<PokemonDetails pokemons={pokemons} />} />
                </Routes>

            </main>
            <InfoSection />
            <Footer />
        </>


    );
}

export default App;



// {/* <Route path='/showme/:showMeThatPokemon' element={<PokemonDetails pokemons={pokemons} />} /> */}      няма значение как ще си кръстим пътя path='/showme/:showMeThatPokemon'
//path='/showme/:showMeThatPokemon   - :showMeThatPokemon    означава че искаме да видим конкретен елемент в showme(или можехме да го кръстим about защото се намираме в aboutSection )
//<Route path='/showme/:showMeThatPokemon' element={<PokemonDetails pokemons={pokemons} />} />  не работим със сървър тук и затова трябва да подадем всички игри и да оставим компонента да си избере правилната игра според URL параметъра
//този вариант не е най добрия,но го прилагаме
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

import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

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


            <main id='main-content'>
                <Routes>

                    <Route path='/' element={<SliderSection />} />
                    <Route path='/about' element={<AboutSection pokemons={pokemons} />} />
                    <Route path='/service' element={<ServiceSection />} />
                    <Route path='/portfolio' element={<PortfolioSection />} />
                    <Route path='/news' element={<NewsSection />} />
                    <Route path='/contact' element={<ContactSection />} />

                </Routes>

            </main>
            <InfoSection />
            <Footer />
        </>


    );
}

export default App;

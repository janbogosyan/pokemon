

import { LatestPokemon } from "./LatestPokemon";

export const AboutSection = ({pokemons}) => {


    return (
        <section className="about_section layout_padding">
            <div className="container">
                {pokemons.map(x => <LatestPokemon pokemon={x} key={x._id}/>)}         
            </div>
        </section>

    )
}




//pokemons.map - pokemons съдържа в себе си масив от покемони и всеки един покемон-(x) го мапваме към <LatestPokemon 
//pokemon={x} - тоест на пропъртито pokemon му подадеш {x} което е цялата информация за този покемон и го използваме в LatestPokemon.js
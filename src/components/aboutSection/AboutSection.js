
import styles from './aboutSection.module.css'    //aboutSection.module.css си importvam за да може да си задействам стила

import { LatestPokemon } from "./LatestPokemon";



export const AboutSection = ({ pokemons }) => {


    return (
        <section className="about_section layout_padding">
            <div className="container">

                {pokemons.length > 0
                    ? pokemons.map(x => <LatestPokemon pokemon={x} key={x._id} />)
                    : <p className={styles["no-pokemons"]}>No available pokemons,at the moment..</p>
                }

            </div>
        </section>

    )
}




//pokemons.map - pokemons съдържа в себе си масив от покемони и всеки един покемон-(x) го мапваме към <LatestPokemon
//pokemon={x} - тоест на пропъртито pokemon му подадеш {x} което е цялата информация за този покемон и го използваме в LatestPokemon.js

//!!!!!!!!!!!!!!!!!
//Мога да си добавя бутон за да добавям нови покемони и ако няма никакви покемони върнати от сървъра да напиша вместо No available pokemons,at the moment.. , First you need to add Pokemon или друго
import styles from './aboutSection.module.css'
import { Link } from 'react-router-dom'

export const LatestPokemon = ({ pokemon }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="detail-box">

                    <div className={styles["custom_heading-container"]}>
                        <h2>{pokemon.title}</h2>
                        <hr />
                    </div>
                    <p>
                        {pokemon.summary}
                    </p>




                    <div className={styles["read-more"]}>
                        <Link to={`/showme/${pokemon._id}`}>Read More</Link>
                    </div>



                </div>
            </div>
            <div >
                <div>
                    <img className="resizePokemon" src={pokemon.imageUrl} alt='' />
                </div>
            </div>
        </div>
    )
}


//informaciqta za vseki 1 pokemon po otdelno q vzimame tuk ,a sme q podali ot AboutSection.js chrez map 
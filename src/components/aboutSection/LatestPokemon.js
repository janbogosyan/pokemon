

export const LatestPokemon = ({ pokemon }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="detail-box">
                    
                    <div className="custom_heading-container">
                        <h2>{pokemon.title}</h2>
                        <hr />
                    </div>
                    <p>
                        {pokemon.summary}
                    </p>
                    <div className="read-more">
                        <a href="*">Read More</a>
                    </div>
                </div>
            </div>
            <div >
                <div>
                    <img className="resizePokemon" src={pokemon.imageUrl} />
                </div>
            </div>
        </div>
    )
}


export const SliderSection = () => {
    return (
        <section className=" slider_section position-relative">
            <div className="slider_bg-container"></div>
            <div className="slider-container">
                <div className="detail-box">
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="sr-only">Next</span>
                    </a>
                    <h1 className="ok">
                        
                        Discovering <br />
                        SOME <br />
                        NEW POKEMONS
                    </h1>
                    <p>
                        The best Pokemons are here !
                    </p>
                    <div>
                        <a href="*" className="slider-link">
                            CONTACT US
                        </a>
                    </div>
                </div>
                <div className="img-box">
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/slider-img.jpg" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/slider-img.jpg" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/slider-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
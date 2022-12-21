
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="/">
                        <img src="images/logo.png" alt="" />
                        <span>POKEMONS</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service">
                                        Services{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">
                                        {" "}
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/news">
                                        {" "}
                                        news{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="quote_btn-container  d-flex justify-content-center">
                            <Link to="#">
                                <img src="images/call.png" alt="" />
                                CALL : +01 1234567890
                            </Link>
                            <Link to="#">
                                <span>@</span>
                                demo@gmail.com
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
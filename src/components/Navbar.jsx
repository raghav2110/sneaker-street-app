import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <header className="header-main">
        <nav className="nav nav-dark header">
            <Link to="/">
                <h3>SNEAKER STREET</h3>
            </Link>
            <button className="hamburger">
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </button>
            <div className="search-container">
                <input type="text" placeholder="🔍  Search.." name="search" />
            </div>
            <ul className="nav-list">
                <li>
                    <Link to="/Login">
                        <button className="btn btn-secondary">Login</button>
                    </Link>
                </li>
                <li>
                    <Link to="/Wishlist">
                        <button className="btn btn-icon">
                            <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/Cart">
                        <button className="btn btn-icon">
                            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    )

}
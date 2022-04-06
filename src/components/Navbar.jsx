import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAuth } from "../context/auth-context";

export function Navbar(){
    const { state, dispatch } = useAuth();
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
                        <div className="navbar-icon">
                            <button className="btn btn-icon">
                                <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
                            </button>
                            <span className="badge badge-icon">{state["wishList"].length}</span>
                        </div>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/Cart">
                        <div className="navbar-icon">
                            <button className="btn btn-icon">
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                            </button>
                            <span className="badge badge-icon">{state["cart"].length}</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    )

}
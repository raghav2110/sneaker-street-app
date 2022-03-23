export function Navbar(){
    return(
        <header className="header-main">
        <nav className="nav nav-dark" style={{position: "relative"}}>
            <a href="/index.html">
                <h3>SNEAKER STREET</h3>
            </a>
            <button className="hamburger">
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </button>
            <div className="search-container">
                <input type="text" placeholder="🔍  Search.." name="search" />
            </div>
            <ul className="nav-list">
                <li>
                    <a href="/pages/loginPage.html">
                        <button className="btn btn-secondary">Login</button>
                    </a>
                </li>
                <li>
                    <a href="/pages/wishList.html">
                        <button className="btn btn-icon">
                            <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="/pages/cartList.html">
                        <button className="btn btn-icon">
                            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    )

}
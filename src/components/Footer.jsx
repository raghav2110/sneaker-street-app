import "../styles/footer.css";

export function Footer(){
    return(
        <div>
            <footer className="landing-footer">
                <nav className="nav nav-dark">
                    <h4>Made With 💙 By Raghav</h4>
                    <ul className="nav-list footer">
                        <li> <a href="https://github.com/raghav2110" target="_blank">
                                <i className="fa fa-github fa-lg" aria-hidden="true"></i></a> </li>

                        <li> <a href="https://www.linkedin.com/in/raghav-heda-96a981167/" target="_blank">
                                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a></li>

                        <li>
                            <a href="https://twitter.com/raghav_heda" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
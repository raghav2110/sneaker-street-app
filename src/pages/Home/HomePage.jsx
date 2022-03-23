import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components/index";
import "../../styles/homePage.css"

export function Home(){
    return(
        <div>
            <Navbar/>
            <div className="cover-image">
                <Link to="/products">
                    <img className="img-responsive" src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042632/Sneaker%20Street/cover-image_xaanzu.jpg" alt="cover-image" />
                </Link>
            </div>
            <div className="home-wrapper">
                <div className="home-heading">
                    <p>NEW ARRIVALS</p>
                </div>
                <div className="new-arrival">
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/new-arrival-1_fxnt2k.jpg" className="img-responsive" alt="" />
                            <div className="product-detail">
                                <div className="brand-name">Nike</div>
                                <div className="product-name">NMD_R1 - CORE BLACK</div>
                                <div className="price-tag">₹12,999</div>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/new-arrival-2_jaafpk.jpg" className="img-responsive" alt="" />
                            <div className="product-detail">
                                <div className="brand-name">Asics</div>
                                <div className="product-name">JAPAN S - WHITE INDIGO</div>
                                <div className="price-tag">5,999</div>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/new-arrival-3_el0wfh.jpg" className="img-responsive" alt="" />
                            <div className="product-detail">
                                <div className="brand-name">Reebok</div>
                                <div className="product-name">CLUB C DOUBLE GEO</div>
                                <div className="price-tag">₹6,999</div>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042631/Sneaker%20Street/new-arrival-4_xmauoc.jpg" className="img-responsive" alt="" />
                            <div className="product-detail">
                                <div className="brand-name">Nike</div>
                                <div className="product-name">AIR MAX - SPORT TURQUOISE</div>
                                <div className="price-tag">₹16,995</div>
                            </div>
                        </div>
                    </a>

                </div>
                <div className="home-category">
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042631/Sneaker%20Street/category-2_lcwskq.jpg" className="img-responsive" alt="" />
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042629/Sneaker%20Street/category-1_rql0pm.jpg" className="img-responsive" alt="" />
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042631/Sneaker%20Street/category-3_mdko3v.jpg" className="img-responsive" alt="" />
                        </div>
                    </a>
                </div>
                <div className="home-category">
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/type-1_n7o9ou.webp" className="img-responsive" alt="" />
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042632/Sneaker%20Street/type-2_m3zhsu.jpg" className="img-responsive" alt="" />
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042631/Sneaker%20Street/type-3_dbfvfy.webp" className="img-responsive" alt="" />
                        </div>
                    </a>
                    <a>
                        <div className="grid-category">
                            <img src="https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/type-4_vb6apl.webp" className="img-responsive" alt="" />
                        </div>
                    </a>

                </div>
            </div>
            <Footer/>
        </div>
    );
}
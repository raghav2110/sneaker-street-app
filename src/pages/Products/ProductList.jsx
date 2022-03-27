import "../../styles/productList.css";
import { useProducts } from "../../context/product-context";


export function ProductList(){
    const  { finalProductList }  = useProducts();
    return(
       
        <div className="product-wrapper">
            {finalProductList.length === 0 && (
                <h1>No Product Available</h1>
            )}
            {finalProductList.map((product)=>{
                if (product.inStock === true){
                return (
                    <a href="#">
                        <div className="card-comp">
                            <img className="img-comp" src={product.image} alt="Shoe Image"/>
                            <span className="card-badge">NEW</span>
                            <div className="text-comp">
                                <div className="header-comp">
                                    <div className="header">{product.brand}</div>
                                    <div className="sub-header">₹ {product.originalPrice}</div>
                                </div>
                                <div className="detail-comp">{product.name}</div>
                            </div>
                            <div className="footer-card">
                                <div className="name-comp-card">
                                    <button className="btn-addToCart">Add To Cart</button>
                                </div>
                                <div className="icons-comp">
                                    <i className="fa fa-heart icon"></i>
                                </div>
                            </div>
                        </div>
                    </a>)}
                else{
                    return(
                        <a href="#">
                            <div class="card-comp">
                                <img class="img-comp over-img" src={product.image} alt="Shoe Image"/>
                                <div class="text-comp">
                                    <div class="header img-overlay">Out Of Stock</div>
                                    <div class="header-comp over-img">
                                        <div class="header">{product.brand}</div>
                                        <div class="sub-header">₹ {product.originalPrice}</div>
                                    </div>
                                    <div class="detail-comp over-img">{product.name}</div>
                                </div>
                                <div class="footer-card">
                                    <div class="name-comp-card">
                                        <button class="btn-addToCart">Add To Cart</button>
                                    </div>
                                    <div class="icons-comp">
                                        <i class="fa fa-heart icon"></i>
                                    </div>
                                </div>
                            </div>
                        </a>)  
                }
            })}
        </div>
        
    );
}

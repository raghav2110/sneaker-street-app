import "../../styles/productList.css";
import { useProducts } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";


export function ProductList(){
    const  { finalProductList }  = useProducts();
    const { state, dispatch } = useAuth();
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
                                    {state["wishList"].some((item)=>item._id === product._id)?(
                                    <i onClick={()=>{
                                        dispatch({ type: "remove_from_wishlist", payload: product })
                                    }} className="fa fa-heart icon fill"></i>) :
                                    (<i onClick={()=>{
                                        dispatch({ type: "add_to_wishlist", payload: product })
                                    }} className="fa fa-heart icon"></i>)}
                                </div>
                            </div>
                        </div>
                    </a>)}
                else{
                    return(
                        <a href="#">
                            <div className="card-comp">
                                <img className="img-comp over-img" src={product.image} alt="Shoe Image"/>
                                <div className="text-comp">
                                    <div className="header img-overlay">Out Of Stock</div>
                                    <div className="header-comp over-img">
                                        <div className="header">{product.brand}</div>
                                        <div className="sub-header">₹ {product.originalPrice}</div>
                                    </div>
                                    <div className="detail-comp over-img">{product.name}</div>
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
                        </a>)  
                    }
            })}
        </div>
        
    );
}

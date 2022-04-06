import "../../styles/wishList.css"
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

export function Wishlist(){
    const { state, dispatch } = useAuth();
    return(
        <>
            <Navbar/>
            <div className="main-wrapper">
                <h1>My Wishlist</h1>
                    <div className="wishlist-wrapper">
                        {state["wishList"].length===0 &&(<h1>Nothing Added In WishList</h1>)}
                        {state["wishList"].map((product)=>{
                            return(
                                <div className="card-comp" id="dismiss-card-1">
                                    <img className="img-comp" src={product.image} alt="Shoe Image"/>
                                    <span className="card-dismiss"><i onClick={()=>{
                                        dispatch({ type: "remove_from_wishlist", payload: product })
                                    }} className="fa fa-trash fa-lg"></i></span>
                                    <div className="text-comp">
                                        <div className="header-comp">
                                            <div className="header">{product.brand}</div>
                                            <div className="sub-header">₹ {product.originalPrice}</div>
                                        </div>
                                        <div className="detail-comp">{product.name}</div>
                                    </div>
                                    <div className="footer-card">
                                        <div className="name-comp-card">
                                            {state["cart"].some((item)=>item._id === product._id)?(
                                                <Link to="/cart" onClick={()=> dispatch({type:"clear_wishlist",payload:product})}>
                                                    <button className="btn-goToCart">Go To Cart</button>
                                                </Link>
                                            ):(<button onClick={()=> dispatch({type:"add_to_cart",payload:product})} className="btn-addToCart">Move To Cart</button>)}
                                            
                                        </div>
                                        <div className="icons-comp">
                                            <i className="fa fa-share-alt icon"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </>
    )
}
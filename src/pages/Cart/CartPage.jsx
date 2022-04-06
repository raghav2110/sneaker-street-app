import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import { PriceSummary } from "../../components/PriceSummary";
import "../../styles/cartPage.css";

export function Cart(){

    const{state,dispatch} = useAuth();
    return(
        <>
            <Navbar/> 
            <div className="main-wrapper">
                <div className="cart-wrapper">
                    <div className="product-grid">
                        <div className="cart-header">
                            <h3>My Shopping Cart ({state["cart"].length} Items)</h3>
                        </div>
                        <div className="cart-content">
                            {state["cart"].length===0 &&(<h1>Nothing Added In Cart</h1>)}
                            {state["cart"].map((product)=>{
                                return(
                                    <div className="card-comp" id="dismiss-card-1">
                                        <img className="img-comp" src={product.image} alt="Shoe Image"/>
                                        <span className="card-dismiss" onClick={() =>
                                            dispatch({ type: "remove_from_cart", payload: product })
                                            }><i className="fa fa-trash fa-lg"></i></span>
                                        <div className="text-comp">
                                            <div className="header-comp">
                                                <div className="header">{product.name}</div>
                                                <div className="sub-header">₹ {product.originalPrice}</div>
                                            </div>
                                            <div className="count-comp">
                                                <button className="btn decrease-product-quantity" onClick={() =>
                                                    dispatch({ type: "decrement_qty", payload: product })
                                                }>
                                                    <i className="fa fa-minus" title="decrease"></i>
                                                </button>
                                
                                                <input
                                                    type="text"
                                                    className="product-quantity-count"
                                                    value={product.qty}
                                                />
                                
                                                <button className="btn decrease-product-quantity" onClick={() =>
                                                    dispatch({ type: "increment_qty", payload: product })
                                                }>
                                                    <i className="fa fa-plus" title="increase"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="footer-card">
                                            <div className="name-comp-card">
                                                <button className="btn-addToCart" onClick={() =>
                                                    dispatch({ type: "add_to_wishlist_from_cart", payload: product })
                                                    }>Add To Wishlist
                                                </button>
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
                    <PriceSummary products={state["cart"]}/>
                </div>
            </div>
        </>
        
    )
}
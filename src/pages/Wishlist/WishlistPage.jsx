import "../../styles/wishList.css"
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";

export function Wishlist(){
    const { state, dispatch } = useAuth();
    return(
        <>
            <Navbar/>
            <div class="main-wrapper">
                <h1>My Wishlist</h1>
                    <div class="wishlist-wrapper">
                        {state["wishList"].length===0 &&(<h1>Nothing Added In WishList</h1>)}
                        {state["wishList"].map((product)=>{
                            return(
                                <div class="card-comp" id="dismiss-card-1">
                                    <img class="img-comp" src={product.image} alt="Shoe Image"/>
                                    <span class="card-dismiss"><i onClick={()=>{
                                        dispatch({ type: "remove_from_wishlist", payload: product })
                                    }} class="fa fa-trash fa-lg"></i></span>
                                    <div class="text-comp">
                                        <div class="header-comp">
                                            <div class="header">{product.brand}</div>
                                            <div class="sub-header">₹ {product.originalPrice}</div>
                                        </div>
                                        <div class="detail-comp">{product.name}</div>
                                    </div>
                                    <div class="footer-card">
                                        <div class="name-comp-card">
                                            <button class="btn-addToCart">Move To Cart</button>
                                        </div>
                                        <div class="icons-comp">
                                            <i class="fa fa-share-alt icon"></i>
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
export function itemReducer(state,action){
    switch(action.type){
        case "add_to_wishlist": return {...state, wishList: [...state.wishList,action.payload]};
        case "remove_from_wishlist": return {...state, wishList: state["wishList"].filter((item)=>item._id !== action.payload._id)};

        case "increment_qty": return{
            ...state, cart: state["cart"].map((item)=>item._id===action.payload._id?{...item,qty:item.qty+1}:item)
        }
        case "decrement_qty": 
            let qtyInCart = false;
            let cartValue = state["cart"].map((item)=>{
                if (item._id === action.payload._id){
                    if(item.qty===1){
                        qtyInCart = true;
                    }else{
                        return{...item,qty:item.qty-1}
                    }
                    return item;
                }else{
                    return item;
                }
            })
            if(qtyInCart){
                cartValue = cartValue.filter((item)=>item._id !== action.payload._id)
            }
            return{...state,cart:cartValue}
        
        case "add_to_cart": return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case "remove_from_cart": return{...state, cart: state["cart"].filter((item)=>item._id !== action.payload._id)}
        case "clear_wishlist": return{...state,wishList: state["wishList"].filter((item)=>item._id !== action.payload._id)}
        case "add_to_wishlist_from_cart": 
            const itemToAdd = state["cart"].find((item)=>item._id === action.payload._id)
            const updateCart = state["cart"].filter((item)=>item._id !== action.payload._id)
            const updateWishList = state["wishList"].concat(itemToAdd);
            return{...state,cart: updateCart, wishList: updateWishList};

        default: return state;
    }
}
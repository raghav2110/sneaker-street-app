export function itemReducer(state,action){
    switch(action.type){
        case "add_to_wishlist": return {...state, wishList: [...state.wishList,action.payload]};
        case "remove_from_wishlist": return {...state, wishList: state["wishList"].filter((item)=>item._id !== action.payload._id)};
        default: return state;
    }
}
import { useState, useContext, createContext, useReducer } from "react";
import { itemReducer } from "../utilities/items/itemReducer";

const itemSettings = {wishList:[], cart:[], priceSummary:{}};

const AuthContext = createContext(itemSettings);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) =>{
    const [wishList, setWishList] = useState([]);
    const [cart,setCart] = useState([]);

    const [state, dispatch] = useReducer(itemReducer, itemSettings);

    return (
        <AuthContext.Provider value={{state, dispatch, wishList, cart}}>
            {children}
        </AuthContext.Provider>
    );
}

export{AuthProvider, useAuth}
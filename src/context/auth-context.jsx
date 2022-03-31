import { useState, useContext, createContext, useReducer } from "react";
import { itemReducer } from "../utilities/items/itemReducer";

const itemSettings = {wishList:[]};

const AuthContext = createContext(itemSettings);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) =>{
    const [wishList, setWishList] = useState([]);

    const [state, dispatch] = useReducer(itemReducer, itemSettings);

    return (
        <AuthContext.Provider value={{state, dispatch, wishList}}>
            {children}
        </AuthContext.Provider>
    );
}

export{AuthProvider, useAuth}
import axios from "axios";
import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { inStock, priceRange, rating, categoryName } from "../utilities/filters/filterModule";
import { productFilterList } from "../utilities/filters/productFilterList";
import { applyFilters } from "../utilities/filters/applyFilter";
import { filterSettings } from "../utilities/filters/filterSetting";

const ProductContext = createContext(filterSettings);

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [state, dispatch] = useReducer(applyFilters, filterSettings);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
          try {
            const res = await axios.get("/api/categories");
            console.log(res.data.categories)
            setCategories(res.data.categories);
            const res1 = await axios.get("/api/products");
            setProducts(res1.data.products);
            console.log(res1.data.products)
          } catch (error) {
            console.log(error);
          }
        })();
    }, []);

    const finalProductList = productFilterList(
        inStock,
        rating,
        priceRange,
        categoryName
    )(state, products);

    console.log(categories,products,finalProductList)
    return (
        <ProductContext.Provider value={{ categories, finalProductList, state, dispatch }}>
          {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider, useProducts };
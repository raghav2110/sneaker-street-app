import React from "react";
import { Filters, Navbar, Footer } from "../../components/index";
import "../../styles/productList.css";
import { ProductList } from "./ProductList";

export function Products(){
    return(
        <>
        <Navbar />
        <div className="content-wrapper">
            <Filters/>
            <ProductList/>
        </div>
        <Footer />
        </>
    );
}
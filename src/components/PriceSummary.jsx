import React from "react";

export function PriceSummary({ products }){
    console.log(products)
    const priceSummary = products.reduce((summary,item)=>(
        {...summary, 
            orgPrice: Number(summary.orgPrice)+ (Number(item.originalPrice)* Number(item.qty)),
            totalDis: 1000, 
            totalPrice: Number(summary.orgPrice)+ (Number(item.originalPrice)* Number(item.qty)) - Number(summary.totalDis),
            qty:summary.qty+item.qty}
    ),{
        orgPrice: 0,totalDis:0,totalPrice:0,qty:0
    })
    return(
        <>
            <div className="order-summary-grid">
                <div className="order-header">
                    <h3>Price Detail ({priceSummary.qty} Items)</h3>
                </div>
                <div className="order-summary-card">
                    <div className="mrp-content">
                        <span>Total MRP</span>
                        <span>₹{priceSummary.orgPrice}</span>
                    </div>
                    <div className="discount-content">
                        <span>Total Discount</span>
                        <span>₹{priceSummary.totalDis}</span>
                    </div>
                    <div className="total-content">
                        <span>Total Payment</span>
                        <span>₹{priceSummary.totalPrice}</span>
                    </div>
                    <a href="#">
                        <button className="btn btn-primary width-100">Place Order</button>
                    </a>
                </div>
            </div>
        </>
    )
}
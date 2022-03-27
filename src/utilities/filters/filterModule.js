export function inStock(state, data) {
    return state.inStock ? data.filter((product) => product.inStock) : data;
}

export function rating(state, data) {
    return data.filter((product) => Number(product.rating) >= Number(state.ratings));
}

export function priceRange(state, data) {
    return data.filter((product) => Number(product.discountedPrice) <= Number(state.priceRange));
}

export function categoryName(state, data) {
    return state.categoryName === "all-gender"? data : data.filter((product) => state.categoryName === product.categoryName)
}


import { filterSettings } from "./filterSetting";

export function applyFilters(state,action){

    switch (action.type){
        case "inStock":
            {return { ...state, inStock: !state.inStock };}
        case "priceRange":
            return { ...state, priceRange: action.payload };
        case "rating":
            return { ...state, ratings: action.payload };
        case "categoryName":
            return { ...state, categoryName: action.payload };
        case "clear":
            return { ...filterSettings };
        default :
            return state;
    }
}
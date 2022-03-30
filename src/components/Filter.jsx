import { useProducts } from "../context/product-context";
import "../styles/productList.css";

export function Filters() {
  const { state, dispatch } = useProducts();
  return (
    <div className="filter-wrapper">
        <header className="filter-header">
            <h3>Filters</h3>
            <button className="btn-filter" onClick={()=>dispatch({type: "clear"})}>Clear</button>
        </header>
        <section className="filter-section">
            <h4>Price</h4>
            <input type="range" min="2000" max="10000" step="2000" list="pricTick" value={state.priceRange} onChange={(e) => dispatch({ type: "priceRange", payload: e.target.value })}/>
            <datalist id="pricTick">
                <option label="500" value="2000"></option>
                <option label="500" value="4000"></option>
                <option label="500" value="6000"></option>
                <option label="500" value="8000"></option>
                <option label="500" value="10000"></option>
            </datalist>
        </section>
        <section className="filter-section">
            <h4>Gender</h4>
            <ul className="filter-list">
                <li>
                    <label className="filter-label"
                    onChange={(e) =>
                        dispatch({ type: "categoryName", payload: e.target.id })
                    }
                    htmlFor="all-gender">
                        <input type="radio" name="gender-category" value="all-gender" id="all-gender" className="filter-input" defaultChecked={state.categoryName === "all-gender"}/>
                        All Genders
                    </label>
                </li>
                <li>
                    <label className="filter-label" 
                    onChange={(e) =>
                        dispatch({ type: "categoryName", payload: e.target.id })
                    }
                    htmlFor="women">
                        <input type="radio" name="gender-category" value="women" id="women" className="filter-input" defaultChecked={state.categoryName === "women"}/>
                        Women
                    </label>
                </li>
                <li>
                    <label className="filter-label" 
                    onChange={(e) =>
                        dispatch({ type: "categoryName", payload: e.target.id })
                    }
                    htmlFor="men">
                        <input type="radio" name="gender-category" value="men"  id="men" className="filter-input" defaultChecked={state.categoryName === "men"}/>
                        Men
                    </label>
                </li>
            </ul>
        </section>
        <section className="filter-section">
            <h4>Product Rating</h4>
            <ul className="filter-list">
                <li>
                    <label className="filter-label" 
                    onChange={(e) =>
                        dispatch({ type: "rating", payload: e.target.id })
                    }
                    htmlFor="star-4">
                        <input type="radio" name="product-rating" value="4" className="filter-input" id="4" defaultChecked={state.ratings === "4"}/>
                        4 ⭐️ & Above
                    </label>
                </li>
                <li>
                    <label className="filter-label" 
                    onChange={(e) =>
                        dispatch({ type: "rating", payload: e.target.id })
                    }
                    htmlFor="star-3">
                        <input type="radio" name="product-rating" value="3" className="filter-input" id="3" defaultChecked={state.ratings === "3"}/>
                        3 ⭐️ & Above
                    </label>
                </li>
                <li>
                    <label className="filter-label" 
                    onChange={(e) =>
                        dispatch({ type: "rating", payload: e.target.id })
                    }
                    htmlFor="star-2">
                        <input type="radio" name="product-rating" value="2" className="filter-input" id="2" defaultChecked={state.ratings === "2"}/>
                        2 ⭐️ & Above
                    </label>
                </li>
                <li>
                    <label className="filter-label" 
                    onChange={(e) =>
                        dispatch({ type: "rating", payload: e.target.id })
                    }
                    htmlFor="star-1">
                        <input type="radio" name="product-rating" value="1" className="filter-input" id="1" defaultChecked={state.ratings === "1"}/>
                        1 ⭐️ & Above
                    </label>
                </li>
            </ul>
        </section>
        <section className="filter-section">
            <h4>Availability</h4>
            <ul className="filter-list">
                <li>
                    <label className="filter-label"
                    onChange={(e) =>
                        dispatch({ type: "inStock", payload: !e.target.id })
                    }
                    htmlFor="in-stock">
                        <input type="checkbox" name="availability" value="available" className="filter-input" id="true" defaultChecked={state.ratings === "false"}/>
                        In Stock
                    </label>
                </li>
            </ul>
        </section>
    </div>
  );
}
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/HomePage";
import { Products } from "./pages/Products/ProductPage";
import { Login } from "./pages/Login/LoginPage";
import { Wishlist } from "./pages/Wishlist/WishlistPage";
import { Cart } from "./pages/Cart/CartPage";
import { SignUp } from "./pages/SignUp/signupPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

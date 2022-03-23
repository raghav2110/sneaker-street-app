import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/HomePage";
import { Products } from "./pages/Products/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

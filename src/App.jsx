import "./App.css";
import Gala from "./pages/Gala/Gala";
import Search from "./pages/search/Search";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Gala />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}
export default App;

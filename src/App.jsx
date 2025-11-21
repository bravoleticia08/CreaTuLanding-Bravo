import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartDetail from "./pages/CartDetail";
import Contact from "./pages/Contact";
import Sucursal from "./pages/Sucursales";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/category/:categoryId" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/cart-detail" element={<CartDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sucursales" element={<Sucursal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
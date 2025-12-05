import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function ItemDetail({ product, detailPage }) {
  const [added, setAdded] = useState(false);
  const { addItem, getItemQuantity } = useCart();

  const alreadyInCartQty = getItemQuantity(product.id);

  const handleOnAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <div className="itemDetail">
      <h3 className="itemDetail-title">{product.title}</h3>

      {product.image && (
        <img src={product.image} alt={product.title} className="product-image" />
      )}

      {detailPage && (
        <p className="itemDetail-description">{product.description}</p>
      )}

      {/* La tarte de manzana no tiene stock, al igual que el musse de choco */}
      {detailPage && product.stock === 0 && (
        <p className="sin-stock">Producto sin stock</p>
      )}

      {detailPage && product.stock > 0 && !added && (
        <ItemCount
          stock={product.stock - alreadyInCartQty}
          initial={1}
          onAdd={handleOnAdd}
        />
      )}

   
      {detailPage && added && (
        <div>
          <Link to="/cart-detail" className="itemDetail-btn">
            Ir al carrito
          </Link>
          <Link to="/" className="itemDetail-btn">
            Seguir comprando
          </Link>
        </div>
      )}

      <span>Precio: ${product.price}</span>

      {!detailPage && (
        <Link to={`/product-detail/${product.id}`} className="itemDetail-btn">
          Detalle
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;

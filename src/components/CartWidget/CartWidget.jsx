import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

function CartWidget() {
  const { getTotalItems } = useCart();
  const total = getTotalItems();

  return (
    <Link to="/cart-detail" className="cartWidgetLink" aria-label="Ir al carrito">
      <button className="cartWidget" aria-hidden>
        <FaShoppingCart className="shoppingCart" />
      </button>
      {total > 0 && <span className="cart-count">{total}</span>}
    </Link>
  );
}

export default CartWidget;
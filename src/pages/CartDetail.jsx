import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import "./CartDetail.css";

function CartDetail() {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();

  return (
    <div>
      <Navbar />
      <main className="cart-container">
        <h2 className="cart-title">Carrito</h2>

        {cart.length === 0 ? (
          <>
            <p className="cart-empty">Tu carrito está vacío.</p>
            <Link to="/" className="cart-btn">Volver al catálogo</Link>
          </>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />

                  <div className="cart-info">
                    <strong>{item.title}</strong>
                    <div>Cantidad: {item.quantity}</div>
                    <div>Precio unitario: ${item.price}</div>
                    <div><b>Subtotal:</b> ${item.price * item.quantity}</div>
                  </div>

                  <div className="cart-actions">
                    <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="cart-total">Total: ${getTotalPrice()}</h3>

            <div className="cart-buttons">
              <button className="cart-remove-btn" onClick={clearCart}>
                Vaciar carrito
              </button>

              <Link to="/checkout" >
                <button className="cart-btn">Ir a Checkout</button>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartDetail;

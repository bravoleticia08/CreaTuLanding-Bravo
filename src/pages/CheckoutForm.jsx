import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router";
import "./CheckoutForm.css";

function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setBuyer((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const order = {
        buyer,
        items: cart.map((i) => ({
          id: i.id,
          title: i.title,
          quantity: i.quantity,
          price: i.price,
        })),
        total: getTotalPrice(),
        date: serverTimestamp(),
      };

      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);

      setOrderId(docRef.id);
      clearCart();
      setLoading(false);
    } catch (error) {
      console.error("Error al crear orden:", error);
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <Navbar />
        <main className="checkout-container">
          <div className="checkout-success">
            <h2>¡Gracias por tu compra!</h2>
            <p>
              Tu número de orden es: <strong>{orderId}</strong>
            </p>

            <button onClick={() => navigate("/")}>
              Volver al inicio
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>

        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            className="checkout-input"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleChange}
            required
          />

          <input
            className="checkout-input"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />

          <input
            className="checkout-input"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
          />

          <div className="checkout-total">
            Total a pagar: ${getTotalPrice()}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="checkout-btn"
          >
            {loading ? "Procesando..." : "Confirmar compra"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default CheckoutForm;

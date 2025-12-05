
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addItem = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: Math.min(p.quantity + quantity, product.stock) }
            : p
        );
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, image: product.image, quantity, stock: product.stock }];
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const getItemQuantity = (id) => {
    const it = cart.find(p => p.id === id);
    return it ? it.quantity : 0;
  };

  const getTotalItems = () => cart.reduce((acc, it) => acc + it.quantity, 0);

  const getTotalPrice = () => cart.reduce((acc, it) => acc + it.quantity * it.price, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      getItemQuantity,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

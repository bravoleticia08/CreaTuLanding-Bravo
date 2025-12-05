import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const less = () => setCount(c => Math.max(1, c - 1));
  const add = () => setCount(c => Math.min(stock, c + 1));
  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="itemCount">
      <div>
        <button onClick={less} className="itemCount-btn">-</button>
      <span>{count}</span>
      <button onClick={add} className="itemCount-btn">+</button>
      </div>
      <button onClick={handleAdd} className="itemCount-btn-add">Agregar</button>
    </div>
  );
}

export default ItemCount;

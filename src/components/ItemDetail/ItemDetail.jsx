import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

function ItemDetail({ product }) {
    return (
        <div className="itemDetail">
            <h3 className="itemDetail-title">{product.title}</h3>
            <p className="itemDetail-desription">{product.description}</p>
            <ItemCount stock={product.stock} />
            <span>Precio: ${product.price}</span>
            <button className="itemDetail-btn-cart">
                <FaShoppingCart className="shoppingCart" />
            </button>
            <Link to={`/product-detail/${product.id}`} className="itemDetail-btn">
                Detalle
            </Link>

        </div>
    )
}

export default ItemDetail
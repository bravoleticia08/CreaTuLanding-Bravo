import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

function ItemDetail({ product, detailPage }) {
    return (
        <div className="itemDetail">
            <h3 className="itemDetail-title">{product.title}</h3>

            {product.image && (<img src={product.image} alt={product.title} className="product-image" />)}

            {detailPage && (
                <p className="itemDetail-description">{product.description}</p>
            )}

            <ItemCount stock={product.stock} />

            <span>Precio: ${product.price}</span>

            <button className="itemDetail-btn-cart">
                <FaShoppingCart className="shoppingCart" />
            </button>
            
            {!detailPage && (
                <Link to={`/product-detail/${product.id}`} className="itemDetail-btn">
                    Detalle
                </Link>
            )}


        </div>
    )
}

export default ItemDetail
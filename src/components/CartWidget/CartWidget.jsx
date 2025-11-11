import "./CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";

function CartWidget (){
    return(
        <button className="cartWidget">
            <FaShoppingCart className="shoppingCart"/>
        </button>
        
    )
}

export default CartWidget
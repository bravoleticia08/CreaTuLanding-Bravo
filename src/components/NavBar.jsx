import Carrito from "./CartWidget"


function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <a href="#"><img src="./src/assets/react.svg" alt="Logo del negocio"/></a>
                </li>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sucursales</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contactate</a></li>
                <li>
                    <Carrito/>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
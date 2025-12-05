Merida Backery – E-commerce en React

Este proyecto es un e-commerce desarrollado con React, React Router, Context API y Firebase Firestore.
Permite listar productos, ver su detalle, agregarlos al carrito, navegar por categorías y finalizar la compra generando una orden en Firestore.
----
Tecnologías utilizadas

React + Vite

React Router

Context API (manejo de estado global del carrito)

Firebase Firestore (base de datos)

CSS Modules / Archivos CSS

Variables de entorno (.env)
-----
Funcionalidades principales
📌 1. Listado y detalle de productos

Se obtienen desde Firestore.

Vista de listado y vista de detalle.

Renderizado condicional según la pantalla.

📌 2. Carrito de compras

Estado global con Context API.

Agregar, eliminar y vaciar carrito.

Cálculo de subtotal, total y cantidad de items.

📌 3. ItemCount

Permite seleccionar cantidad a agregar.

Valida stock.

Se oculta luego de agregar el producto al carrito.

📌 4. Navegación

Implementada con React Router.

Navegación SPA sin recargar la página.

Rutas para:

Inicio

Categorías

Detalle de producto

Carrito

Checkout

📌 5. Firebase

Colección items para los productos.

Colección orders para guardar las compras.

Al confirmar la compra se genera un documento en Firestore.

📌 6. Experiencia de usuario

Loaders y mensajes condicionales:

“Cargando…”

“Carrito vacío”

“Producto sin stock”

Muestra el ID de la orden al finalizar la compra.

---

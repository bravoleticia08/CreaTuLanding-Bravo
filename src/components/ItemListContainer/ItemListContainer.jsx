import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail' //componente de cada tarjeta
import './ItemListContainer.css'

function ItemListContainer() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('src/jsons/products.json')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <div className='itemListContainer'>
            {
                products.map((product) => {
                    return <ItemDetail key={product.id} product={product} />
                })
            }

        </div>
    )

}

export default ItemListContainer
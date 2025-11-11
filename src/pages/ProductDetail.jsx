import '../components/ItemDetail/ItemDetail.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Navbar from "../components/Navbar/Navbar"


function ProductDetail() {

    const { productId } = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/src/jsons/products.json')
                const products = await response.json()
                const productFind = products.find(product => product.id == productId)
                setProduct(productFind)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        console.log(product)
    }, [product])

    return (
        <>
            <Navbar />
            <div className="product-detail">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                {product.image && (
                    <img src={product.image} alt={product.title} className="product-image" />
                )}
            </div>
        </>
    )
}

export default ProductDetail
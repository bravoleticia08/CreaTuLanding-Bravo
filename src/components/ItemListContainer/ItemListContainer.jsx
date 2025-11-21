import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProducts, productsCategory } from "../../data/Api";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      productsCategory(categoryId).then(setProducts);
    } else {
      getProducts().then(setProducts);
    }
  }, [categoryId]); 

  return (
    <div className="itemListContainer">
      {products.map(product => (
        <ItemDetail key={product.id} product={product} detailPage={false} />
      ))}
    </div>
  );
}

export default ItemListContainer;

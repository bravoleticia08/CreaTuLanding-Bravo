import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductId } from "../../data/Api";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductId(productId).then(data => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) return <p>Cargando...</p>;

  return < ItemDetail product={product} detailPage={true} />;
}

export default ItemDetailContainer;

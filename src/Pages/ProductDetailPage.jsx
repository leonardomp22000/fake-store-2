import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id)
      .then((prod) => {
        setProduct(prod);
        console.log(prod);
      })
      .catch((error) => {
        toast.error("Error al obtener el producto");
        console.log("Error al obtener el producto", error);
      });

    //Hacer fetch al product by id Mandar llamar la funcion del api
  }, [id]);
  return (
    <main className="grid grid-cols-2 items-center ">
      <article>
        <img src={product.thumbnail} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock} </p>
        <p>Brand: {product.brand}</p>
       
      </article>
    </main>
  );
}

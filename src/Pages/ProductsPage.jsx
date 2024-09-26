import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProductsPage() {
  //const [count, setCount] = useState(0);
  //**1. Se usa use efect val terminar de renderizar el componente  2. Al cambiar alguna de sus dependencias */
  //** Recibe dos parametros 1. Una funcion a ejecutar 2. Un arreglo de dependencias */

  // Se ejecutara soo al terminar de renderiazr le componente
  //  useEffect(() => {
  //    console.log("Termino de renderizar");
  //  }, []);

  // Se ejecuta al cambiar la dependencia count y al terminar de renderizar el componente
  //  useEffect(() => {
  //    console.log("UseEfect count", count);
  //  }, [count]);

  //  useEffect(() => {
  //    console.log("Sin deps");
  //  });

  // Nunca actualizar un estado si ese use Efect depende de ese estado por que se van a hacer un loop infinito
  //  useEffect(() => {
  //    setCount(count + 1);
  //    console.log("woooooooooo");
  //  }, [count]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  useAuth();
  useEffect(() => {
    if (!token) {
      toast.error("Debes iniciar sesion para ver los productos");
      navigate("/login");
      return;
    }
    getProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        toast.error("Error al obtener los productos");
        console.error("get products error", error);
      });
  }, []);
  return (
    <main className="p-4">
      <h1 className="text-4xl font-semibold  text-center">Productos</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, idx) => {
          return (
            <article
              key={`prod-${idx}`}
              className="hover:bg-white/10 cursor-pointer rounded p-4 flex flex-col justify-between"
            >
              <img src={product.thumbnail} alt={product.title} />
              <p className="text-lg text-center">{product.title}</p>
              <Link
                to={`/productos/${product.id}`}
                className="bg-white/50 w-full p-2 rounded text-center"
              >
                Ver detalle
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

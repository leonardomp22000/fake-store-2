import { Link } from "react-router-dom";
import PageSection from "../components/PageSection";

export default function HomePage() {
  return (
    <div>
      <h1 className=" text-4x1 font-bold text-center"> Home Page</h1>
      <p className="text-center">This is the HomePage</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/productos/123">Producto123</Link>
      </div>
      <PageSection>
        <h2>Vendemos de todo</h2>
      </PageSection>

      <PageSection>
        <div>
          <img src="https://picsum.photos/200/300" alt="" />
          <p>Hola soy un texto </p>
        </div>
      </PageSection>
    </div>
  );
}

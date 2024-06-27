import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Toaster } from "sonner";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: '/productos',
    element: <ProductsPage/>,
  },
  {
    path: '/productos/:id',
    element: <ProductDetailPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
<Toaster/>
<RouterProvider router={router} />
  </>

);

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
 import HomePage from "./Pages/HomePage";
import { Toaster } from "sonner";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import MainLayout from "./layouts/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,

      },
      {
        path: "/productos",
        element: <ProductsPage />,
      },
      {
        path: "/productos/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);

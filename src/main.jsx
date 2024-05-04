import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Decouvert from "./components/pages/decouvert.jsx";
import Commande from "./components/pages/commande.jsx";
import Profil from "./components/pages/profil.jsx";
import Layout from "./components/layout.jsx";
import App from "./App.jsx";
import { Navigate } from "react-router-dom";
import SignUp from "./components/formulaires/sign-up.jsx";
import ProductDetail from "./components/decouvert/product-detail.jsx";
import Details from "./components/decouvert/detailss.jsx";
import Panier from "./components/pages/panier.jsx";
import ProductsS from "./components/decouvert/productss.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to={"app"} replace /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/commande",
        element: <Commande />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/decouvert",
        element: <Decouvert />,
      },

      {
        path: "/panier",
        element: <Panier />,
      },
      {
        path: "/detailS",
        element: <Details />,
      },

      {
        path: "/productss",
        element: <ProductsS />,
      },

      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

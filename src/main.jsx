import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Single from "./pages/Single";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Contacts from "./pages/Contacts";
import ContactSuccess from "./pages/ContactSuccess";

// configure the routes
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:id",
    element: <Single />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/contact-success",
    element: <ContactSuccess />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);

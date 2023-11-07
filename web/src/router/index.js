import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Order from "../pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />
  },
  {
    path: "/product/:productId",
    element: <Product />
  },
  {
    path: "/order/:productId",
    element: <Order />
  }
])

export default router;
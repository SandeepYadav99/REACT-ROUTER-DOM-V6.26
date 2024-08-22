import ErrorPage from "../pages/Error4o4";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import RouteLayout from "../pages/Route";

const { createBrowserRouter } = require("react-router-dom");

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index:true, element: <Home /> },
      { path: "product", element: <Products /> },
      { path: "product/:id", element: <ProductDetail /> },
    ],
  },
]);

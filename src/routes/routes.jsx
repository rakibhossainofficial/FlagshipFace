import { createBrowserRouter } from "react-router";
import Favourite from "../Pages/Favourite";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Pages/Cart";
import PhoneDetails from "../Pages/PhoneDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("../Phones.json"),
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/phone-details/:id",
        loader: () => fetch("../Phones.json"),
        element: <PhoneDetails />,
      },
    ],
  },
]);

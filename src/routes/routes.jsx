import { createBrowserRouter } from "react-router";
import App from "../App";
import Favourite from "../Favourite";

export const router = createBrowserRouter([
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/",
        element: <p> Hello</p>,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/about",
        element: <p>This is About section</p>,
      },
    ],
  },
]);

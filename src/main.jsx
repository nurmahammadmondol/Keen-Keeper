import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import FriendsContext from "./Components/Context/FriendsContext";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: 'details/:id',
        Component: Details

      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsContext>
      <RouterProvider router={router} />
    </FriendsContext>
  </StrictMode>,
);

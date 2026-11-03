import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import FriendsContext from "./Components/Context/FriendsContext";
import Details from "./Components/Details/Details";
import Timeline from "./Components/TimeLine/Timeline";
import Stats from "./Components/Statas/Stats";

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
        path: "timeline",
        Component: Timeline,
      },
      {
        path: "stats",
        Component: Stats,
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

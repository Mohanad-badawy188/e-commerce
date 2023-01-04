import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import AddingItems from "./AddingItems";
import Home from "./Home";
import Shop from "./Shop";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/AddItems",
      element: <AddingItems />,
    },
    {
      path: "/Shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
}

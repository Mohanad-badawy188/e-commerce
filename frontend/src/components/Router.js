import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import AddingItems from "./AddingItems";
import Home from "./Home";



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

  ]);

  return <RouterProvider router={router} />;
}

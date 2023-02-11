import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import AddingItems from "./AddingItems";
import Cart from "./Cart";
import Home from "./Home";
import NotFound from "./NotFound";
import OrderCompleted from "./OrderCompleted";
import Product from "./Product";
import { RegisterUser } from "./redux/UserSlice";
import Shop from "./Shop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SubmitCart from "./SubmitCart";

export default function Router() {
  const User = JSON.parse(localStorage.getItem("user"))?.foundUser;

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
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/Shop",
      element: <Shop />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/signup",
      element: User ? <Home /> : <SignUp />,
    },
    {
      path: "/signin",
      element: User ? <Home /> : <SignIn />,
    },
    {
      path: "/cart",
      element: User ? <Cart /> : <SignIn />,
    },
    {
      path: "/submitcart",
      element: User ? <SubmitCart /> : <SignIn />,
    },
    {
      path: "/orderCompleted",
      element: User ? <OrderCompleted /> : <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

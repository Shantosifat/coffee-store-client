import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import SignUp from "./Components/SignUp.jsx";
import LogIn from "./Components/LogIn.jsx";
import AuthProvider from "./Components/context/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:4000/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "details/:id",
        Component: CoffeeDetails,
      },
      {
        path: "logIn",
        Component: LogIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "users",
        loader: () => fetch("http://localhost:4000/users"),
        Component: Users,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

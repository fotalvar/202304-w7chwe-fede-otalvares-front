import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/user/login"} replace /> },
      { path: "user/login", element: <LoginPage /> },
      { path: "user/home", element: <HomePage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;

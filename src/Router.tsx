import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Categories, Page404, Blog } from "./pages";

export default function Router() {

  let routes;
  // if (!user) {
  //   routes = [
  //     { path: "/", element: <Home /> },
  //     { path: "/categories", element: <Categories /> },
  //     { path: "*", element: <Page404 /> },
  //   ];
  // } else {
  //   routes = [
  //     { path: "/dashboard", element: <Dashboard /> },
  //     { path: "*", element: <Navigate to="/dashboard" replace /> },
  //   ];
  // }

  routes = [
    { path: "/", element: <Home /> },
    { path: "/categories", element: <Categories /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/blog", element: <Blog /> },
    { path: "*", element: <Page404 /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
}

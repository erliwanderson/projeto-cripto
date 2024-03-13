import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import { Detail } from "./pages/Detail/index";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };

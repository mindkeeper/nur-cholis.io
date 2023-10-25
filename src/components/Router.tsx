import { createBrowserRouter } from "react-router-dom";
import Home from "../app/home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ element: <Home />, path: "/" }],
  },
]);
export default router;

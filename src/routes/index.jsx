// routes/index.jsx

import { createBrowserRouter } from "react-router-dom";
import { Home, Baby, NotFound } from "../pages";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/baby',
        element: <Baby />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
])

export default router

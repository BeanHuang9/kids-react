// routes/index.jsx

import { createBrowserRouter } from "react-router-dom";
import { Home, Baby, NotFound } from "../pages";

const router = createBrowserRouter([
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
])

export default router

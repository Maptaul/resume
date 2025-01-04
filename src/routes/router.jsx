import { createBrowserRouter } from "react-router-dom";
import UpdatingSoon from "../Components/UpdatingSoon";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "about",
        element: <UpdatingSoon />,
      },
      {
        path: "work",
        element: <UpdatingSoon />,
      },
      {
        path: "testimonials",
        element: <UpdatingSoon />,
      },
      {
        path: "contact",
        element: <UpdatingSoon />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;

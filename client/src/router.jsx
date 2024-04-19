import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Sniper from "./pages/Sniper";
import UserConnection from "./pages/UserConnection";
import FakeSchool from "./pages/FakeSchool";
// page components
// import BestOf from "./pages/BestOf";
// import Create from "./pages/Create";

// router creation

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Sniper />,
      },
      {
        path: "fakeschool",
        element: <FakeSchool />,
      },
      {
        path: "connexion",
        element: <UserConnection />,
      },
    ],
  },
]);

// rendering

// {
//   path: "/best-of",
//   element: <BestOf/>,
// },
// {
//   path: "/create",
//   element: <Create/>,
// },
// {
//   path: "/fakeschool",
//   element: <FakeSchool/>,
// },

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default router;

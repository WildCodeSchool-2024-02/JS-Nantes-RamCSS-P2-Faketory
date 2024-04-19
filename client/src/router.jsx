import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import UserConnection from "./pages/UserConnection";

// page components
// import BestOf from "./pages/BestOf";
// import Create from "./pages/Create";
// import FakeSchool from "./pages/FakeSchool";

// router creation

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
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

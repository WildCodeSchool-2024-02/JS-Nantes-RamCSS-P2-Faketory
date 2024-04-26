import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import UserConnection from "./pages/UserConnection";
import FakeSchool from "./pages/FakeSchool";
import BestOf from "./pages/BestOf";
import Create from "./pages/Create";
import Redirection from "./pages/Redirection";
import NewUser from "./pages/NewUser";
import SelectNews from "./pages/SelectNews";
// page components

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
        path: "best-of",
        element: <BestOf />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "redirection",
        element: <Redirection />,
      },
      {
        path: "fakeschool",
        element: <FakeSchool />,
      },
      {
        path: "connexion",
        element: <UserConnection />,
      },
      {
        path: "newuser",
        element: <NewUser />,
      },
      {
        path: "select-news",
        element: <SelectNews />,
      },
    ],
  },
]);

export default router;

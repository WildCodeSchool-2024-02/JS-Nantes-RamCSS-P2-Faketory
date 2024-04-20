import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Sniper from "./pages/Sniper";
import UserConnection from "./pages/UserConnection";
import FakeSchool from "./pages/FakeSchool";
import FakeSchoolCopy from "./pages/FakeSchoolCopy";
// page components
// import BestOf from "./pages/BestOf";
// import Create from "./pages/Create";

// router cre

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
        path: "fakeschoolcopy",
        element: <FakeSchoolCopy />,
      },
      {
        path: "connexion",
        element: <UserConnection />,
      },
    ],
  },
]);

export default router;

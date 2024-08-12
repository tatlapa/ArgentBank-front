import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import IsAuth from "../components/IsAuth";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <IsAuth Child={SignIn} requireAuth={false} />,
  },
  {
    path: "/user",
    element: <IsAuth Child={User} requireAuth={true} />,
  },
]);

export default router;

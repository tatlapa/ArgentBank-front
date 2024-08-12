import { useEffect } from "react";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch } from "react-redux";
import { loginReducer } from "./features/userSlice";

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      const user = JSON.parse(userData);
      dispatch(loginReducer({ ...user, token }));
    }
  }, [dispatch]);

  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
  );
};

export default App;

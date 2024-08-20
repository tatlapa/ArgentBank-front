import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Navigate } from "react-router-dom";

interface IsAuthProps {
  Page: React.FC;
  requireAuth: boolean;
}

const IsAuth: React.FC<IsAuthProps> = (props) => {
  const { Page, requireAuth } = props;
  const user = useSelector(selectUser);
  const token = localStorage.getItem("token");

  if (requireAuth && !(user || token)) {
    return <Navigate to="/sign-in" />;
  }

  if (!requireAuth && (user || token)) {
    return <Navigate to="/user" />;
  }

  return <Page />;
};

export default IsAuth;
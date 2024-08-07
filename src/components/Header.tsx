import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutReducer, selectUser } from "../features/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logoutReducer());
  };

  return (
    <header className="flex justify-between py-1 px-5">
      <Link to="/">
        <img
          className="w-[200px]"
          src="/src/assets/argentBankLogo.png"
          alt="logo-argentBank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {user ? (
        <div className="flex">
          <Link
            to="/user"
            className="flex gap-1 items-center mr-2 font-bold text-black hover:underline"
          >
            <UserCircleIcon className="w-4 h-4" />
            {user.firstName}
          </Link>
          <Link to="/"
            onClick={userLogout}
            className="flex gap-1 items-center font-bold text-black hover:underline"
          >
            <ArrowRightOnRectangleIcon className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      ) : (
        <Link
          to="/sign-in"
          className="flex gap-1 items-center mr-2 font-bold text-black hover:underline"
        >
          <UserCircleIcon className="w-4 h-4" />
          Sign In
        </Link>
      )}
    </header>
  );
};

export default Header;
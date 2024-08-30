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
    <header className="flex justify-between py-1.5 px-5">
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
            <UserCircleIcon className="w-4 h-4 md:w-8 md:h-8" />
            {user.firstName}
          </Link>
          <Link to="/"
            onClick={userLogout}
            className="flex gap-1 items-center font-bold text-black hover:underline"
          >
            <ArrowRightOnRectangleIcon className="w-4 h-4 md:w-8 md:h-8" />
            <p className="md:text-xl">Sign Out</p>
            </Link>
        </div>
      ) : (
        <Link
          to="/sign-in"
          className="flex gap-1 items-center mr-2 font-bold text-black hover:underline"
        >
          <UserCircleIcon className="w-4 h-4 md:w-8 md:h-8" />
          <p className="md:text-xl">Sign In</p>
        </Link>
      )}
    </header>
  );
};

export default Header;
import {
  UserCircleIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const isConnected = true;

  if (isConnected) {
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
        <Link
          to="/sign-in"
          className="flex gap-1 items-center mr-2 font-bold text-black hover:underline"
        >
          <UserCircleIcon className="w-4 h-4" />
          Sign In
        </Link>
      </header>
    );
  } else {
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
        <div className="flex">
          <Link
            to="/sign-in"
            className="flex gap-1 items-center mr-2 font-bold text-black hover:underline"
          >
            <UserCircleIcon className="w-4 h-4" />
            {props.userName}
          </Link>
          <Link
            to="/sign-out"
            className="flex gap-1 items-center font-bold text-black hover:underline"
          >
            <ArrowRightEndOnRectangleIcon className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </header>
    );
  }
};

export default Header;

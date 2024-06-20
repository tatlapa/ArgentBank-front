import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


const Header = () => {
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
      <Link to="/sign-in" className="flex gap-1 items-center mr-2 font-bold text-black hover:underline">
        <UserCircleIcon className="w-4 h-4" />
        Sign in
      </Link>
    </header>
  );
};

export default Header;

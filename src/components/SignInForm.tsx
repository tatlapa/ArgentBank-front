import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="bg-white flex flex-col p-10 items-center">
      <UserCircleIcon className="w-5 h-5" />
      <h1 className="my-5 text-2xl font-bold">Sign In</h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input type="password" className="border-2" />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Link to="/" className="bg-[#00bc77] flex items-center justify-center text-white py-2">Sign In</Link>
      </form>
    </div>
  );
};

export default SignInForm;

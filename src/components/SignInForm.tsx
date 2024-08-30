import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { getUserProfile, login } from "../services/api";
import { useDispatch } from "react-redux";
import { loginReducer } from "../features/userSlice";
import { useMutation } from "react-query";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginMutation = useMutation(login, {
    onSuccess: async (token) => {
      const userProfile = await getUserProfile(token);

      if (userProfile) {
        dispatch(loginReducer({ ...userProfile, token, rememberMe }));
        navigate("/user");
      }
    },
    onError: (error: Error) => {
      let errorMessage = "An unexpected error occurred";
      if (error.message === "Network response was not ok") {
        errorMessage =
          "Problem connecting to the server. Please try again later.";
      } else if (error.message === "Invalid credentials") {
        errorMessage = "Invalid email or password. Please try again.";
      }
      alert(errorMessage);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="bg-white flex flex-col p-10 md:p-20 items-center">
      <UserCircleIcon className="w-10 h-10" />
      <h1 className="my-5 text-2xl font-bold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            <p className="md:text-xl">Email</p>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 md:p-3 md:text-xl"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold">
          <p className="md:text-xl">Password</p>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 md:p-3 md:text-xl"
            required
          />
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="flex md:h-4 md:w-4"
          />
          <label htmlFor="remember-me" className="md:text-lg">Remember me</label>
        </div>
        <button
          type="submit"
          className="bg-[#00bc77] flex items-center justify-center text-white py-2 md:text-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { getUserProfile, login } from "../services/api";
import { useDispatch } from "react-redux";
import { loginReducer } from "../features/userSlice";
import { useMutation } from "@tanstack/react-query";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginMutation = useMutation(login, {
    onSuccess: async (data) => {
      const token = data;
      const userProfile = await getUserProfile(token);

      if (userProfile) {
        dispatch(loginReducer({...userProfile, token, rememberMe}));
        navigate("/user");
      }
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate({ email, password })
  }

  return (
    <div className="bg-white flex flex-col p-10 items-center">
      <UserCircleIcon className="w-5 h-5" />
      <h1 className="my-5 text-2xl font-bold">Sign In</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2"
            required
          />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button
          type="submit"
          className="bg-[#00bc77] flex items-center justify-center text-white py-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

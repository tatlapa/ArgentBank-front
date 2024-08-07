import React, { useState } from "react";
import { useMutation } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PriceItem from "../components/PriceItem";
import { selectUser, updateUser } from "../features/userSlice";
import { updateUserProfile } from "../services/api";

const User = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [showModal, setShowModal] = useState(false);

  const updateProfileMutation = useMutation(updateUserProfile, {
    onSuccess: (data) => {
      dispatch(updateUser({ firstName, lastName }));
      setShowModal(false);
    },
    onError: (error) => {
      alert("Something went wrong");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updating profile with:", {
      token: user.token,
      firstName,
      lastName,
    });
    updateProfileMutation.mutate({ token: user.token, firstName, lastName });
  };

  return (
    <>
      <Header />
      <main className="bg-[#12002b] flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center my-5">
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
        {!showModal && (
          <button
            className="bg-[#00bc77] border-[#00bc77] text-white p-2 font-bold"
            onClick={() => setShowModal(true)}
          >
            Edit Name
          </button>
        )}
        {showModal && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-3">
                <input
                  type="text"
                  placeholder={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-2 rounded"
                />
                <input
                  type="text"
                  placeholder={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-2 rounded"
                />
            </div>
            <div className="flex gap-3 justify-center">
              <button type="submit" className="rounded bg-[#00bc77] py-1.5 w-24 text-lg font-bold">
                Save
              </button>
              <button
                type="button"
                className="rounded bg-gray-500 py-1.5 w-24 text-lg font-bold"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        <h2 className="sr-only">Accounts</h2>
        <div className="my-8 flex flex-col gap-4 items-center w-full">
          <PriceItem
            title="Argent Bank Checking (x8349)"
            price="$2,082.79"
            balanceState="Available balance"
          />
          <PriceItem
            title="Argent Bank Savings (x6712)"
            price="$10,928.42"
            balanceState="Available balance"
          />
          <PriceItem
            title="Argent Bank Credit Card (x8349)"
            price="$184.30"
            balanceState="Current balance"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default User;

import Header from "../components/Header";
import Footer from "../components/Footer";
import PriceItem from "../components/PriceItem";

const User = () => {
  return (
    <>
      <Header userName="Tony" />
      <main className="bg-[#12002b] flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center my-5">
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="bg-[#00bc77] border-[#00bc77] text-white p-2 font-bold">
          Edit Name
        </button>
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

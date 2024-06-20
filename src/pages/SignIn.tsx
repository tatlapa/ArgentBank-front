import Header from "../components/Header";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <>
      <Header />
      <main className="bg-[#12002b] flex items-center justify-center py-10 h-[83vh]">
        <SignInForm />
      </main>
      <Footer />
    </>
  );
};

export default SignIn;

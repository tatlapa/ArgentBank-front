import Header from "../components/Header";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-[#12002b] flex items-center justify-center py-10 h-[83vh]">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;

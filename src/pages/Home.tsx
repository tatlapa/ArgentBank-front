import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureItem from "../components/FeatureItem";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className="p-10 flex flex-col md:flex-row gap-20">
        <FeatureItem
          icon="/src/assets/icon-chat.png"
          title="You are our #1 priority"
          text="
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          "
        />
        <FeatureItem
          icon="/src/assets/icon-money.png"
          title="More savings means higher rates"
          text="
            The more you save with us, the higher your interest rate will be!
          "
        />
        <FeatureItem
          icon="/src/assets/icon-security.png"
          title="Security you can trust"
          text="
            We use top of the line encryption to make sure your data and money
            is always safe.
          "
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;

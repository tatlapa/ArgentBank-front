const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/bank-tree.jpeg')] h-[300px] md:h-[400px] bg-cover bg-no-repeat bg-top-50 md:bg-top-33 relative">
      <section className="relative top-8 p-8 min-w-[200px] mx-auto w-[264px] md:w-[364px] text-left bg-white md:absolute md:top-[50px] md:right-[50px] md:m-8">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="font-bold md:text-2xl">No fees.</p>
        <p className="font-bold md:text-2xl">No minimum deposit.</p>
        <p className="font-bold md:text-2xl">High interest rates.</p>
        <p className="text-sm mt-3.5 md:text-xl">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Hero;

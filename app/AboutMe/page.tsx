const Aboutme = () => {
  return (
    <section className="flex items-center justify-between text-white h-[260px] max-w-280 pt-[40px] pb-[78px] px-[40px]">
      <div className="flex flex-col gap-5">
        <span className="font-sans text-sm font-light">
          BUILT WITH CLARITY & CHARACTER
        </span>
        <h1 className="font-sans text-4xl font-semibold">
          Thoughtful websites. A little unexpected.
        </h1>
      </div>
      <div className="flex flex-col gap-5 w-100">
        <p className="font-sans text-md">
          I’m Tunyawat, a web developer focused on building clear, reliable
          websites and digital experiences that feel human.
        </p>
        <p className="fotnt-sans text-sm">Explore selected work</p>
      </div>
    </section>
  );
};

export default Aboutme;

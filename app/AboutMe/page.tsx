const Aboutme = () => {
  return (
    <section
      className="
        flex flex-col lg:flex-row
        lg:items-center lg:justify-between
        gap-8 lg:gap-12
        text-white
        w-full max-w-280 mx-auto
        px-6 md:px-10 lg:px-10
        pt-10 pb-14
        lg:min-h-[260px]
      "
    >
      {/* Left Column */}
      <div className="flex flex-col gap-5 lg:max-w-[65%]">
        <span className="font-sans text-xs md:text-sm font-light tracking-wide">
          BUILT WITH CLARITY & CHARACTER
        </span>

        <h1 className="font-sans text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight">
          Thoughtful websites. A little unexpected.
        </h1>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5 w-full lg:max-w-[320px]">
        <p className="font-sans text-sm md:text-base leading-relaxed text-white/80">
          I’m Tunyawat, a web developer focused on building clear, reliable
          websites and digital experiences that feel human.
        </p>

        <a
          href="#work"
          className="font-sans text-sm w-fit border-b border-white/40 pb-1 hover:border-white transition-colors"
        >
          Explore selected work ↗
        </a>
      </div>
    </section>
  );
};

export default Aboutme;

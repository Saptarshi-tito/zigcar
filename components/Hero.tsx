const Hero = () => {
  return (
    <div className="hero mt-0]">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="hero__title">XCEED</h1>
            <p className="hero__subtitle">
              Clearly structured design language on the exterior for a sporty
              and self-assured presence Available with combustion engine, in
              petrol and diesel The modern interior is equipped with
              high-quality materials and innovations such as the BMW Curved
              Display
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/bmw.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

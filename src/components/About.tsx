const About = () => {
  return (
    <section id="about" className="relative overflow-hidden p-4">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635328/about-img-comp_vpmpkb.jpg"
          alt="about-image-background"
          className="w-full h-full max-md:h-[52rem] object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="absolute md:bottom-32 max-md:top-10 left-60 max-lg:left-10 md:translate-y-[-50%] w-full">
        <p className="gold-gradient w-[540px] max-md:w-[290px] text-xl max-md:text-xs">
          <span className="inline text-7xl max-md:text-6xl float-start mr-1 font-other">
            E
          </span>
          very woman is a masterpiece, and my designs celebrate her unique
          colors, shapes, and spirit. At NATO, fashion is more than style—it's a
          movement of inclusivity, embracing women and vulnerable communities
          with designs that honor all body types. Sustainability is at our core,
          weaving eco-consciousness into every stitch. Proudly Kenyan, our
          collections pulse with the rhythm of Africa, blending heritage with
          modern elegance.{" "}
          <span className="max-md:hidden">
            From bespoke couture to ready-to-wear, NATO is a tapestry of
            artistry, purpose, and empowerment.
          </span>{" "}
        </p>
        <p className="text-primary mt-4 max-md:mt-2 text-xl max-md:text-xs">
          ~ Aulgah Nato
        </p>
        <button className="border border-primary text-primary text-xs max-md:text-xxs px-6 py-3 mt-8 max-md:mt-4 transition-all ease-out duration-500 hover:border-gray-600 hover:text-gray-600 hover:px-3 hover:py-2">
          MORE ABOUT US
        </button>
      </div>
    </section>
  );
};

export default About;

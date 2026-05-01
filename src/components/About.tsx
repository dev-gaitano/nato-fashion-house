import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-bg-container">
        <img
          src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635328/about-img-comp_vpmpkb.jpg"
          alt="about-image-background"
          className="about-bg-image"
          loading="lazy"
        />
      </div>
      <div className="about-content">
        <p className="about-text gold-gradient">
          <span className="about-dropcap">
            E
          </span>
          very woman is a masterpiece, and my designs celebrate her unique
          colors, shapes, and spirit. At NATO, fashion is more than style—it's a
          movement of inclusivity, embracing women and vulnerable communities
          with designs that honor all body types. Sustainability is at our core,
          weaving eco-consciousness into every stitch. Proudly Kenyan, our
          collections pulse with the rhythm of Africa, blending heritage with
          modern elegance.{" "}
          <span className="about-text-extra">
            From bespoke couture to ready-to-wear, NATO is a tapestry of
            artistry, purpose, and empowerment.
          </span>{" "}
        </p>
        <p className="about-author">
          ~ Aulgah Nato
        </p>
        <button className="about-cta-btn">
          MORE ABOUT US
        </button>
      </div>
    </section>
  );
};

export default About;

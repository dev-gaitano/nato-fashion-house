import "./Services.css";

const Services = () => {
  const services = [
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/04/nato-home-services-07-768x815.jpg?auto=format&fit=crop&q=80",
      title: "Editorial Styling",
      description:
        "When you open your wardrobe, the most beautiful thing you can wear is confidence. The new modern power dressing is all about exuding confidence…",
      cta: "Learn More",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/04/nato-home-services-08-768x815.jpg?auto=format&fit=crop&q=80",
      title: "Corporate/Brand Consulting",
      description:
        "Aulgah Nato offers a range of style packages for corporate clients and each event can be tailored to suit the client needs.  Whatever the concept…",
      cta: "Learn More",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/05/nato-home-services-08-768x815.jpg?auto=format&fit=crop&q=80",
      title: "Personal/Celebrity Styling",
      description:
        "A brand journey starts with the first point of contacts for your clients - namely your team of employees. Their style is giving that first - and crucial…",
      cta: "Learn More",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/05/nato-home-services-13-768x815.jpg?auto=format&fit=crop&q=80",
      title: "Wedding gowns/occasion wear",
      description:
        "This glamorous and unique styling experience is the ultimate way to shop and you will go away feeling energised and excited about your day...",
      cta: "Learn More",
    },

    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/05/nato-personal-style-management-05.jpg?auto=format&fit=crop&q=80",
      title: "Personal/Celebrity Styling",
      description:
        "A brand journey starts with the first point of contacts for your clients - namely your team of employees. Their style is giving that first - and crucial…",
      cta: "Learn More",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/05/nato-personal-style-management-02.jpg?auto=format&fit=crop&q=80",
      title: "Personal style management",
      description:
        "Catering to our most discerning clients, each appointment with one of our talented stylists is entirely bespoke – designed to meet specific needs. ",
      cta: "Learn More",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">
            Nato <span className="gold-gradient">Services</span>
          </h2>
          <p className="services-description">
            Discover our latest services that blend traditional African
            craftsmanship with contemporary design.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <button className="service-cta-btn gold-gradient">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="services-discover-btn-container">
          <button className="services-discover-btn gold-gradient">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

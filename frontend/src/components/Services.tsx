import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#f3e8e2_0%,_transparent_70%)]"
    >
      <div className="container px-4 sm:px-6 lg:px-8 inset-0 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Nato <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest services that blend traditional African
            craftsmanship with contemporary design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300 object-top"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="border-b gold-gradient text-gold-gradient text-xs font-black px-6 py-3 mt-4 mb-6 transition-all ease-out duration-500 hover:border-gray-600 hover:text-gray-600 hover:px-2">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="border gold-gradient text-gold-gradient text-xs font-black px-6 py-3 mt-4 transition-all ease-out duration-500 hover:border-gray-600 hover:text-gray-600 hover:px-3 hover:py-2">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

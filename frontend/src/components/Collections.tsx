import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collections = () => {
  const collections = [
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2024/02/arwa-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Arwa",
      collection: "Elegance Ease",
      price: "KSHs. 18,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2024/02/hanifa-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Hanifa",
      collection: "Elegance Ease",
      price: "KSHs. 20,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2024/02/daila-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Dalia",
      collection: "Elegance Ease",
      price: "KSHs. 30,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2024/02/huban-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Hunbun",
      collection: "Elegance Ease",
      price: "KSHs. 35,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2024/02/amina-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Amina",
      collection: "Elegance Ease",
      price: "KSHs. 25,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2024/02/gamala-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Gamala",
      collection: "Elegance Ease",
      price: "KSHs. 18,500",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="collections"
      className="py-20 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#f3e8e2_0%,_transparent_70%)]"
    >
      <div className="container px-4 sm:px-6 lg:px-8 inset-0 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Latest <span className="gold-gradient">Arrivals</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collections that blend traditional African
            craftsmanship with contemporary design.
          </p>
          <button className="border gold-gradient text-gold-gradient text-xs font-black px-6 py-3 mt-4 transition-all ease-out duration-500 hover:border-gray-600 hover:text-gray-600 hover:px-3 hover:py-2">
            SHOP MORE
          </button>
        </div>

        <Slider {...settings}>
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer px-2">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300 object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="gold-gradient">{collection.collection}</p>
                <h3 className="text-xl font-semibold mb-2">
                  {collection.title}
                </h3>
                <p className="text-gray-600">{collection.price}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  {collection.title}
                </h3>
                <p className="text-gray-600">{collection.price}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Collections;

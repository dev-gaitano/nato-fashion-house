import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Collections.css";

const Collections = () => {
  const collections = [
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/shetta-dress-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Arwa",
      collection: "Elegance Ease",
      price: "KSHs. 18,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/bellevue-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Hanifa",
      collection: "Elegance Ease",
      price: "KSHs. 20,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/tanya-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Dalia",
      collection: "Elegance Ease",
      price: "KSHs. 30,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/the-olivette-dress-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Hunbun",
      collection: "Elegance Ease",
      price: "KSHs. 35,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/royal-albata-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Amina",
      collection: "Elegance Ease",
      price: "KSHs. 25,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/gypsy-mid-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Gamala",
      collection: "Elegance Ease",
      price: "KSHs. 18,500",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="collections" className="collections">
      <div className="container">
        <div className="collections-header">
          <h2 className="collections-title">
            Latest Collections
          </h2>
        </div>

        <Slider {...settings}>
          {collections.map((collection, index) => (
            <div key={index} className="collection-slide">
              <div className="collection-image-wrapper">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="collection-image"
                />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-content">
                <p className="collection-category">{collection.collection}</p>
                <h3 className="collection-item-title">{collection.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
        <div className="collections-cta-container">
          <button className="collections-cta-btn">
            SHOP MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;

import "./Partners.css";

const Partners = () => {
  const partners = [
    {
      name: "Sustainable Textiles Co",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80",
      role: "Material Partner",
    },
    {
      name: "African Artisans United",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80",
      role: "Craftsmanship Partner",
    },
    {
      name: "Global Fashion Ethics",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80",
      role: "Certification Partner",
    },
    {
      name: "Tech Solutions Inc",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&q=80",
      role: "Technology Partner",
    },
    {
      name: "Green Logistics",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&q=80",
      role: "Logistics Partner",
    },
    {
      name: "Design Studio X",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=200&q=80",
      role: "Design Partner",
    },
    {
      name: "Ethical Manufacturing Co",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80",
      role: "Manufacturing Partner",
    },
  ];

  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="partners-container">
          <div className="partners-header">
            <h2 className="partners-title">
              Our <span className="gold-gradient">Partners</span>
            </h2>
            <p className="partners-description">
              Collaborating with industry leaders to create positive change
            </p>
          </div>

          <div className="partners-track">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-item">
                <div className="partner-logo-wrapper glass-card hover-lift">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

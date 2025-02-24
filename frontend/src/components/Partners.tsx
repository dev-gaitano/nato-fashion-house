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
    <section id="partners" className="py-20 bg-nato-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our <span className="gold-gradient">Partners</span>
            </h2>
            <p className="text-gray-600">
              Collaborating with industry leaders to create positive change
            </p>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-8 py-4 px-2 -mx-2 items-center justify-between">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center space-y-3 min-w-[120px]"
              >
                <div className="w-[120px] h-[80px] relative glass-card p-0 rounded-lg hover-lift flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* <p className="text-nato-400 text-xs text-center whitespace-nowrap">
                  {partner.role}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

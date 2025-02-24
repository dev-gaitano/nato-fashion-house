
const CollectionsPreview = () => {
  const latestArrivals = [
    {
      title: "Summer Flow Dress",
      description: "Limited edition sustainable cotton dress",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Heritage Blazer",
      description: "Modern take on traditional patterns",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    },
    {
      title: "Unity Collection",
      description: "Celebrating diversity through design",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    },
  ];

  return (
    <section id="latest-arrivals" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Latest <span className="gold-gradient">Arrivals</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our newest pieces, where tradition meets contemporary design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArrivals.map((item) => (
            <div
              key={item.title}
              className="group hover-lift overflow-hidden rounded-2xl glass-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;

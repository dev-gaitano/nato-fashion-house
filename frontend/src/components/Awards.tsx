
const Awards = () => {
  const awards = [
    {
      title: "Sustainable Fashion Award",
      year: "2023",
      organization: "Global Fashion Council",
    },
    {
      title: "Cultural Heritage Excellence",
      year: "2023",
      organization: "African Fashion Foundation",
    },
    {
      title: "Inclusive Design Innovation",
      year: "2022",
      organization: "Fashion For All Institute",
    },
  ];

  return (
    <section id="awards" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f3e8e2_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our <span className="gold-gradient">Recognition</span>
            </h2>
            <p className="text-gray-600">
              Celebrating our commitment to sustainable and inclusive fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.title}
                className="glass-card p-6 rounded-xl hover-lift"
              >
                <div className="text-nato-400 mb-2">{award.year}</div>
                <h3 className="text-xl font-heading font-medium mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

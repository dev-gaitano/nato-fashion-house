import "./Awards.css";

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
    <section id="awards" className="awards">
      <div className="awards-bg" />
      
      <div className="container awards-container">
        <div className="awards-inner">
          <div className="awards-header">
            <h2 className="awards-title">
              Our <span className="gold-gradient">Recognition</span>
            </h2>
            <p className="awards-description">
              Celebrating our commitment to sustainable and inclusive fashion
            </p>
          </div>

          <div className="awards-grid">
            {awards.map((award) => (
              <div key={award.title} className="award-card glass-card hover-lift">
                <div className="award-year">{award.year}</div>
                <h3 className="award-title">
                  {award.title}
                </h3>
                <p className="award-org">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

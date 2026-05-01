import "./Sustainability.css";

const Sustainability = () => {
  return (
    <section className="sustainability">
      <div className="container">
        <div className="sustainability-grid">
          <div className="sustainability-content">
            <h2 className="sustainability-title">
              Sustainable Fashion for a Better Future
            </h2>
            <p className="sustainability-text">
              We're committed to creating fashion that respects both people and
              planet. Every piece is crafted with sustainable materials and
              ethical practices, ensuring a positive impact on our environment
              and communities.
            </p>
            <div className="sustainability-features">
              <div className="sustainability-feature">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">🌱</span>
                </div>
                <div>
                  <h3 className="feature-title">Eco-Friendly Materials</h3>
                  <p className="feature-description">
                    Sustainably sourced fabrics and materials
                  </p>
                </div>
              </div>
              <div className="sustainability-feature">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">♻️</span>
                </div>
                <div>
                  <h3 className="feature-title">Zero Waste Initiative</h3>
                  <p className="feature-description">
                    Minimizing waste through careful production
                  </p>
                </div>
              </div>
              <div className="sustainability-feature">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">👥</span>
                </div>
                <div>
                  <h3 className="feature-title">Fair Labor</h3>
                  <p className="feature-description">
                    Supporting local artisans and communities
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sustainability-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1618437542145-38e9015cf8f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80"
              alt="Sustainable fashion"
              className="sustainability-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

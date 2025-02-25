const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f3e8e2_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our <span className="gold-gradient">Story</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
                alt="NATO Fashion House craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                NATO Fashion House was born from a vision to create inclusive,
                sustainable fashion that celebrates African craftsmanship and
                embraces all bodies.
              </p>
              <p className="text-gray-600">
                Our journey began in Kenya, where we work directly with local
                artisans to create pieces that honor traditional techniques
                while embracing modern sustainability practices.
              </p>
              <p className="text-gray-600">
                Every piece tells a story of cultural authenticity, mindful
                creation, and inclusive beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

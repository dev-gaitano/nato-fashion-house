import React from "react";

const Sustainability = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Sustainable Fashion for a Better Future
            </h2>
            <p className="text-gray-600 mb-8">
              We're committed to creating fashion that respects both people and
              planet. Every piece is crafted with sustainable materials and
              ethical practices, ensuring a positive impact on our environment
              and communities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="font-semibold">Eco-Friendly Materials</h3>
                  <p className="text-gray-600">
                    Sustainably sourced fabrics and materials
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <div>
                  <h3 className="font-semibold">Zero Waste Initiative</h3>
                  <p className="text-gray-600">
                    Minimizing waste through careful production
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold">Fair Labor</h3>
                  <p className="text-gray-600">
                    Supporting local artisans and communities
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://www.aulgahnato.com/wp-content/uploads/2022/05/nato-home-about-01-763x1024.jpg?auto=format&fit=crop&q=80"
              alt="Sustainable fashion"
              className="w-full h-[600px] object-cover rounded-none object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

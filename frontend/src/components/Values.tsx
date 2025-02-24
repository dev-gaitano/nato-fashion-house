import React from "react";
import { Heart, Leaf, Users, Globe } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusivity",
      description:
        "Fashion that celebrates every body, identity, and expression.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Body Diversity",
      description: "Designs that embrace and enhance all body types.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Eco-conscious practices and materials in every piece.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cultural Authenticity",
      description: "Celebrating African heritage through modern fashion.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our <span className="gold-gradient">Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At NATO Fashion House, we believe in creating fashion that makes a
            difference. Our values guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block p-3 bg-neutral-100 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

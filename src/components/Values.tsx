import React from "react";
import { Heart, Leaf, Users, Globe } from "lucide-react";
import "./Values.css";

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
    <section className="values">
      <div className="container">
        <div className="values-header">
          <h2 className="values-title">
            Our <span className="gold-gradient">Values</span>
          </h2>
          <p className="values-description">
            At NATO Fashion House, we believe in creating fashion that makes a
            difference. Our values guide everything we do.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-wrapper">
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

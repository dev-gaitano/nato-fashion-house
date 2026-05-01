import { Quote, Star } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      quote:
        "NATO's commitment to inclusive sizing and sustainable fashion is revolutionary. Their pieces make me feel confident and beautiful.",
      rating: 5,
    },
    {
      name: "David Kimani",
      role: "Art Director",
      quote:
        "The fusion of traditional African patterns with modern designs is masterfully done. Each piece tells a story.",
      rating: 5,
    },
    {
      name: "Aisha Patel",
      role: "Sustainability Advocate",
      quote:
        "Finally, a brand that truly understands the importance of ethical fashion without compromising on style.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Customer <span className="gold-gradient">Stories</span>
          </h2>
          <p className="testimonials-description">
            Hear from our community about their experiences with NATO
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="testimonial-card glass-card hover-lift"
            >
              <Quote className="testimonial-quote-icon" size={24} />

              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="testimonial-star"
                    size={16}
                  />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.quote}"</p>

              <div className="testimonial-author">
                <h4 className="testimonial-name">
                  {testimonial.name}
                </h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

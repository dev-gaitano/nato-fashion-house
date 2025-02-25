import { Quote, Star } from "lucide-react";

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
    <section id="testimonials" className="py-20 bg-nato-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Customer <span className="gold-gradient">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community about their experiences with NATO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 rounded-xl hover-lift relative"
            >
              <Quote
                className="text-nato-300 absolute top-4 right-4"
                size={24}
              />

              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="fill-nato-400 text-nato-400"
                    size={16}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

              <div>
                <h4 className="font-heading font-medium text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-nato-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

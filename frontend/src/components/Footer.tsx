
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nato-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">NATO</h3>
            <p className="text-nato-200 mb-4">
              Sustainable fashion that celebrates cultural authenticity and embraces all bodies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#latest-arrivals" className="text-nato-200 hover:text-white transition-colors">Latest Arrivals</a></li>
              <li><a href="/#about" className="text-nato-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#sustainability" className="text-nato-200 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@nato.com" className="text-nato-200 hover:text-white transition-colors">
                  info@nato.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+254123456789" className="text-nato-200 hover:text-white transition-colors">
                  +254 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-nato-200">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg mb-4">Stay Connected</h4>
            <p className="text-nato-200 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-nato-700 text-white placeholder:text-nato-400 border border-nato-600 focus:outline-none focus:border-nato-500"
              />
              <button className="px-4 py-2 bg-nato-600 hover:bg-nato-500 transition-colors rounded-lg">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-nato-700 mt-12 pt-8 text-center text-nato-400">
          <p>&copy; {new Date().getFullYear()} NATO Fashion House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

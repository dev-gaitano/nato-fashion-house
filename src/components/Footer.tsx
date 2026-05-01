import { Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const partners = [
    {
      name: "Safaricom PLC",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-1.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Telkom",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-2.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Hennessy",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-3.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Skyy Vodka",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-4.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Moet & Chadon",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-5.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Glenmorangie",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-6.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Hivos",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-7.png?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const Dropdown = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="footer-dropdown">
        {/* Title + Arrow Toggle */}
        <div className="footer-dropdown-header" onClick={() => setIsOpen(!isOpen)}>
          <h3 className={`footer-dropdown-title ${isOpen ? "open" : "closed"}`}>
            {title}
          </h3>
          <FaChevronDown className={`footer-dropdown-icon ${isOpen ? "open" : ""}`} />
        </div>

        {/* Links */}
        <div className={`footer-dropdown-content gold-gradient ${isOpen ? "open" : "closed"}`}>
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-left">
            {/* Desktop Only Sections */}
            <div className="footer-desktop-links">
              <div className="footer-link-group">
                <h3 className="footer-heading">NEED ANY HELP?</h3>
                <div className="footer-link-list gold-gradient">
                  <a href="#">Contact Us</a>
                  <a href="#">My Order</a>
                  <a href="#">FAQs</a>
                  <a href="#">Unsubscribe</a>
                  <a href="#">Sitemap</a>
                </div>
              </div>

              <div className="footer-link-group">
                <h3 className="footer-heading">QUICK LINKS</h3>
                <div className="footer-link-list gold-gradient">
                  <a href="#">Home</a>
                  <a href="#">Shop</a>
                  <a href="#">Collections</a>
                  <a href="#">Press</a>
                  <a href="#">About Nato</a>
                  <a href="#">Privacy & Cookies</a>
                  <a href="#">Legal</a>
                  <a href="#">Management</a>
                </div>
              </div>
            </div>

            <div className="footer-services-desktop">
              <h3 className="footer-heading">NATO SERVICES</h3>
              <div className="footer-link-list gold-gradient">
                <a href="#">Personal Styling</a>
                <a href="#">Celebrity Styling</a>
                <a href="#">Corporate / Brand Consulting</a>
                <a href="#">Occasion Wear</a>
                <a href="#">Editorial Styling</a>
              </div>
            </div>

            {/* Mobile Dropdowns */}
            <Dropdown
              title="NEED ANY HELP?"
              links={[
                { label: "Contact Us", href: "#" },
                { label: "My Order", href: "#" },
                { label: "FAQs", href: "#" },
                { label: "Unsubscribe", href: "#" },
                { label: "Sitemap", href: "#" },
              ]}
            />

            <Dropdown
              title="QUICK LINKS"
              links={[
                { label: "Home", href: "#" },
                { label: "Shop", href: "#" },
                { label: "Collections", href: "#" },
                { label: "Press", href: "#" },
                { label: "About Nato", href: "#" },
                { label: "Privacy & Cookies", href: "#" },
                { label: "Legal", href: "#" },
                { label: "Management", href: "#" },
              ]}
            />

            <Dropdown
              title="NATO SERVICES"
              links={[
                { label: "Personal Styling", href: "#" },
                { label: "Celebrity Styling", href: "#" },
                { label: "Corporate / Brand Consulting", href: "#" },
                { label: "Occasion Wear", href: "#" },
                { label: "Editorial Styling", href: "#" },
              ]}
            />
          </div>
          <div className="footer-right">
            <div className="footer-form-group">
              <h3 className="footer-heading">STORE LOCATION</h3>
              <input type="email" placeholder="Country/Region" className="footer-input" />
            </div>
            <div className="footer-form-group">
              <h3 className="footer-heading">SIGN UP FOR NEWSLETTER</h3>
              <p className="footer-newsletter-text gold-gradient">
                By entering your email address below, you consent to receiving
                our newsletter with access to our latest collections, events and
                initiatives. More details on this are provided in our Privacy
                Policy
              </p>
              <input type="email" placeholder="Email" className="footer-input" />
            </div>
            <div>
              <h3 className="footer-heading">COUNTRY/REGION</h3>
              <a href="#" className="gold-gradient">Kenya</a>
            </div>
          </div>
        </div>
        <div className="footer-partners">
          <div className="footer-partners-track">
            {partners.map((partner) => (
              <div key={partner.name} className="footer-partner-item">
                <div className="footer-partner-logo-container hover-lift">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-full-logo-container">
          <img
            src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635330/nato-logo-full_moycdt.png"
            alt="logo-image"
            className="footer-full-logo"
          />
        </div>
        <div className="footer-bottom footer-bottom-border">
          <p className="footer-copyright gold-gradient">
            &copy; {new Date().getFullYear()} NATO Fashion House. All rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link gold-gradient">
              <Instagram />
            </a>
            <a href="#" className="footer-social-link gold-gradient">
              <Twitter />
            </a>
            <a href="#" className="footer-social-link gold-gradient">
              <Phone />
            </a>
            <a href="#" className="footer-social-link gold-gradient">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

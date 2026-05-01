import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Heart, Search, User } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLinksVisible, setIsLinksVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Desktop Menu Toggle Button */}
          <button
            className="menu-toggle-btn"
            onClick={() => setIsLinksVisible(!isLinksVisible)}
          >
            {isLinksVisible ? (
              <X className="icon-6" />
            ) : (
              <div className="menu-toggle-content">
                <Menu className="icon-6" />
                <p>Menu</p>
              </div>
            )}
          </button>

          {/* Desktop Menu */}
          {/* Links Visibility */}
          {isLinksVisible && (
            <div className="nav-links-desktop">
              <NavLink href="/#collections">Home</NavLink>
              <NavLink href="/#collections">Shop</NavLink>
              <NavLink href="/#about">Services</NavLink>
              <NavLink href="/#sustainability">Sustainability</NavLink>
              <NavLink href="/#about">Press</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </div>
          )}

          <a href="/" className="nav-logo-link">
            <img
              src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635330/nato-logo-full_moycdt.png"
              alt="logo-image"
              className={`nav-logo ${isScrolled ? "nav-logo-scrolled" : "nav-logo-initial"}`}
            />
          </a>

          <div className="nav-actions">
            <button className="nav-action-btn">
              <Search size={20} />
            </button>
            <button className="nav-action-btn nav-action-btn-desktop">
              <User size={20} />
            </button>
            <button className="nav-action-btn nav-action-btn-desktop">
              <Heart size={20} />
            </button>
            <button className="nav-action-btn">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="icon-6" />
            ) : (
              <Menu className="icon-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              <MobileNavLink
                href="/#collections"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </MobileNavLink>
              <MobileNavLink
                href="/#sustainability"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </MobileNavLink>
              <MobileNavLink
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sustainability
              </MobileNavLink>
              <MobileNavLink
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Press
              </MobileNavLink>
              <MobileNavLink
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
              <MobileNavLink
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Favourites
              </MobileNavLink>
              <MobileNavLink
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a href={href} onClick={onClick} className="mobile-nav-link">
    {children}
  </a>
);

export default Navbar;

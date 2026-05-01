import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Heart, Search, User } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-sm mt-8"
        : "bg-transparent"
        }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Menu Toggle Button */}
          <button
            className="hidden md:block ml-4"
            onClick={() => setIsLinksVisible(!isLinksVisible)}
          >
            {isLinksVisible ? (
              <X className="h-6 w-6" />
            ) : (
              <div
                className="
                flex items-center space-x-2 w-[450px] text-primary"
              >
                <Menu className="h-6 w-6" />
                <p className="ml-2">Menu</p>
              </div>
            )}
          </button>

          {/* Desktop Menu */}
          {/* Links Visibility */}
          {isLinksVisible && (
            <div className="hidden md:flex items-center space-x-8 w-[450px]">
              <NavLink href="/#collections">Home</NavLink>
              <NavLink href="/#collections">Shop</NavLink>
              <NavLink href="/#about">Services</NavLink>
              <NavLink href="/#sustainability">Sustainability</NavLink>
              <NavLink href="/#about">Press</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </div>
          )}

          <a href="/" className="flex w-[450px]">
            <img
              src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635330/nato-logo-full_moycdt.png"
              alt="logo-image"
              className={`w-24 transition-all justify-center duration-500 ease-in-out ${isScrolled
                ? "md:scale-100 translate-y-0 max-md:justify-start mx-auto max-md:mx-2 "
                : "translate-y-96 max-md:translate-y-40 scale-[8] max-md:scale-[3] max-md:translate-x-[6rem] mx-auto"
                }`}
            />
          </a>

          <div className="flex items-center justify-end space-x-4 max-md:space-x-2 w-[450px]">
            <button className="p-2 text-primary hover:text-black">
              <Search size={20} />
            </button>
            <button className="max-md:hidden p-2 text-primary hover:text-black">
              <User size={20} />
            </button>
            <button className="max-md:hidden p-2 text-primary hover:text-black">
              <Heart size={20} />
            </button>
            <button className="p-2 text-primary hover:text-black">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 mx-2" />
            ) : (
              <Menu className="h-6 w-6 mx-2 text-primary hover:text-foreground transition-colors duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t">
            <div className="flex flex-col items-center space-y-4 p-4">
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
  <a
    href={href}
    className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
  >
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
  <a
    href={href}
    onClick={onClick}
    className="text-lg font-medium text-gray-700 hover:text-black transition-colors block py-2"
  >
    {children}
  </a>
);

export default Navbar;

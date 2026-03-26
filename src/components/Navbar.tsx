import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="leading-tight">
            <span className="font-display text-lg font-bold text-primary block">Our Lady's</span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Dental Clinic</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+2349022211645"
            className="bg-hero-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" /> Book Now
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === l.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+2349022211645"
              className="bg-hero-gradient text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

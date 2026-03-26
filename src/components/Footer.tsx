import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-teal-deep text-primary-foreground">
    <div className="container mx-auto section-padding">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="mb-4">
            <span className="font-display text-lg font-bold block">Our Lady's</span>
            <span className="text-xs text-primary-foreground/60 tracking-widest uppercase">Dental Clinic</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Ensuring confident and healthy smiles for every patient in Effurun and beyond.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-gold">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Services", "Gallery", "Contact", "Privacy"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-gold">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="tel:+2349022211645" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" /> +234 902 221 1645
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Top Floor, Our Lady's Shopping Mall, 100 Airport Road, Effurun, Delta State</span>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" /> Follow us on Instagram
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-gold">Hours</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon – Fri: 9AM – 5PM</div>
            <div className="ml-6">Saturday: 10AM – 4PM</div>
            <div className="ml-6">Sunday: Closed</div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Our Lady's Dental Clinic. All rights reserved.</p>
        <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy & Disclaimer</Link>
      </div>
    </div>
  </footer>
);

export default Footer;

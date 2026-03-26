import Layout from "@/components/Layout";
import clinicImg from "@/assets/clinic-reception.webp";
import clinicInterior from "@/assets/clinic-interior.webp";
import caseWhiteningAfter from "@/assets/case-whitening-after.jpg";
import { Star, Users, Award, Heart, MapPin, Calendar, Shield, Sparkles, Phone } from "lucide-react";

const milestones = [
  { year: "Founded", title: "Opening Our Doors", desc: "Our Lady's Dental Clinic was established in Effurun, Delta State — committed to providing exceptional oral healthcare to the community." },
  { year: "Growth", title: "Expanding Our Services", desc: "We expanded into cosmetic dentistry, orthodontics, and advanced restorative procedures to serve more diverse patient needs." },
  { year: "Excellence", title: "5-Star Patient Care", desc: "Achieved consistently outstanding patient ratings through personalized care, modern technology, and a welcoming environment." },
  { year: "Today", title: "Community's Trusted Choice", desc: "Proud to be the dental clinic of choice for families across Delta State, combining expertise with genuine compassion." },
];

const stats = [
  { number: "5★", label: "Patient Rating" },
  { number: "1000+", label: "Happy Patients" },
  { number: "6+", label: "Service Categories" },
  { number: "10+", label: "Years Experience" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={clinicInterior} alt="Our modern dental clinic" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-blue-deep/90 to-primary/70" />
      </div>
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold tracking-widest uppercase mb-6">About Us</span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Where Smiles<br />Meet <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Dedicated to providing exceptional dental care to the Effurun community with warmth, expertise, and cutting-edge technology.
          </p>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="w-full bg-card border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`px-6 py-8 md:py-10 text-center ${i < stats.length - 1 ? "border-r border-border" : ""}`}>
            <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
            <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Who We Are */}
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 lg:py-28">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Who We Are</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-8">
            A Clinic Built on Trust & Care
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>Our Lady's Dental Clinic is a high-rated dental facility located in Effurun, Delta State. Known for our professional yet friendly staff, we are situated in a central, accessible shopping complex.</p>
            <p>We offer a comprehensive range of oral health services — from preventive care and cosmetic dentistry to orthodontics and surgical procedures.</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-foreground font-medium">
              <MapPin className="w-4 h-4 text-primary" /> Effurun, Delta State
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-foreground font-medium">
              <Calendar className="w-4 h-4 text-primary" /> Mon – Sat, 8am – 6pm
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
          <img src={caseWhiteningAfter} alt="Happy patient with whitened teeth" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-16 lg:py-28">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">What Drives Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Patient-Centered", desc: "Every treatment plan is tailored to the unique needs and comfort of each patient." },
            { icon: Award, title: "Excellence", desc: "We maintain the highest standards using modern equipment and proven techniques." },
            { icon: Users, title: "Community", desc: "Proudly serving the Effurun community and building lasting patient relationships." },
            { icon: Shield, title: "Transparency", desc: "We explain procedures thoroughly so you always know what to expect." },
          ].map((v) => (
            <div key={v.title} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                <v.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display font-bold text-primary-foreground text-xl mb-3">{v.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Journey */}
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 lg:py-28 bg-secondary/30">
      <div className="text-center mb-14">
        <span className="text-gold font-semibold tracking-widest uppercase text-sm">Our Journey</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">The Path We've Walked</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        {milestones.map((m, i) => (
          <div key={m.year} className="flex gap-6 md:gap-10 mb-12 last:mb-0">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              {i < milestones.length - 1 && <div className="w-px h-full bg-border mt-2" />}
            </div>
            <div className="pb-8">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">{m.year}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1 mb-2">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Clinic Environment */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={clinicImg} alt="Our welcoming clinic reception" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
      </div>
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">A Space Designed for Comfort</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            Our modern clinic features state-of-the-art equipment, calming interiors, and a welcoming reception — so every visit feels comfortable, safe, and stress-free.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Modern Equipment", "Calming Interiors", "Accessible Location", "Flexible Payments"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 lg:py-24 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">Join Our Growing Family</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Experience the difference of dental care delivered with genuine compassion. We'd love to welcome you.
        </p>
        <a href="tel:+2348062989492" className="bg-gold-shimmer text-foreground px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-lg">
          <Phone className="w-5 h-5" /> Schedule Your Visit
        </a>
      </div>
    </section>
  </Layout>
);

export default About;

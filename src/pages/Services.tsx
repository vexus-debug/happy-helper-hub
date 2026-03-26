import Layout from "@/components/Layout";
import { Shield, Sparkles, Scissors, Wrench, SmilePlus, Stethoscope, Phone, Clock, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import clinicImg from "@/assets/clinic-interior.webp";
import clinicReception from "@/assets/clinic-reception.webp";

const allServices = [
  {
    icon: Shield,
    category: "Preventive Care",
    tagline: "Keep your smile healthy",
    description: "Regular preventive care is the foundation of lasting oral health. Our gentle, thorough approach helps you avoid costly treatments down the line.",
    color: "from-primary to-teal-deep",
    items: [
      { name: "Scaling and Polishing", duration: "45 min", desc: "Deep cleaning to remove plaque and tartar buildup" },
      { name: "Routine Dental Exams", duration: "30 min", desc: "Comprehensive check-up with digital X-rays" },
      { name: "Cavity Fillings", duration: "60 min", desc: "Tooth-colored composite fillings for a natural look" },
      { name: "Oral Hygiene Education", duration: "20 min", desc: "Personalized guidance for better daily dental care" },
    ],
  },
  {
    icon: Wrench,
    category: "Restorative Care",
    tagline: "Rebuild & restore with confidence",
    description: "When damage occurs, our advanced restorative solutions bring back both function and beauty to your teeth.",
    color: "from-teal-deep to-primary",
    items: [
      { name: "Root Canal Treatment", duration: "90 min", desc: "Pain-free treatment to save infected teeth" },
      { name: "Dental Crowns", duration: "2 visits", desc: "Custom-fitted caps for damaged or weakened teeth" },
      { name: "Bridges", duration: "2 visits", desc: "Fixed replacements for one or more missing teeth" },
      { name: "Dental Implants", duration: "Multiple visits", desc: "Permanent titanium-based tooth replacement" },
    ],
  },
  {
    icon: Sparkles,
    category: "Cosmetic Dentistry",
    tagline: "Shine brighter every day",
    description: "Transform your smile with our range of cosmetic procedures — designed to boost your confidence and leave a lasting impression.",
    color: "from-primary to-teal-deep",
    items: [
      { name: "Professional Teeth Whitening", duration: "60 min", desc: "Clinical-grade whitening for dramatic results" },
      { name: "Veneers", duration: "2 visits", desc: "Porcelain shells for a flawless smile transformation" },
      { name: "Smile Makeovers", duration: "Consultation", desc: "Comprehensive plan to redesign your entire smile" },
    ],
  },
  {
    icon: SmilePlus,
    category: "Orthodontics",
    tagline: "Straighten your path to confidence",
    description: "Achieve perfectly aligned teeth with our orthodontic solutions — for patients of all ages.",
    color: "from-teal-deep to-primary",
    items: [
      { name: "Metal Braces", duration: "12-24 months", desc: "Traditional braces for reliable teeth straightening" },
      { name: "Teeth Alignment", duration: "6-18 months", desc: "Customized alignment treatment for your bite" },
      { name: "Retainers", duration: "Fitting visit", desc: "Post-treatment retainers to maintain your results" },
    ],
  },
  {
    icon: Scissors,
    category: "Oral Surgery",
    tagline: "Expert surgical precision",
    description: "Our experienced team performs surgical procedures with the utmost care, precision, and patient comfort.",
    color: "from-primary to-teal-deep",
    items: [
      { name: "Tooth Extraction", duration: "30 min", desc: "Safe and gentle removal of problematic teeth" },
      { name: "Surgical Procedures", duration: "Varies", desc: "Advanced surgical solutions for complex cases" },
      { name: "Wisdom Teeth Removal", duration: "60 min", desc: "Expert extraction of impacted wisdom teeth" },
    ],
  },
  {
    icon: Stethoscope,
    category: "Prosthetics",
    tagline: "Complete your smile again",
    description: "Restore full function and aesthetics with our expertly crafted dental prosthetics — comfortable, durable, and natural-looking.",
    color: "from-teal-deep to-primary",
    items: [
      { name: "Complete Dentures", duration: "3 visits", desc: "Full-arch replacements for a natural appearance" },
      { name: "Partial Dentures", duration: "2 visits", desc: "Removable solutions for partially missing teeth" },
      { name: "Denture Repairs", duration: "Same day", desc: "Quick fixes to get you back to smiling fast" },
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={clinicImg} alt="Our dental clinic" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-teal-deep/90 to-primary/80" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold tracking-widest uppercase mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Exceptional Dental<br />
              Care, <span className="text-gold">Tailored</span> For You
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              From routine check-ups to advanced cosmetic procedures — experience world-class dental care in a warm, comfortable environment.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Preventive", "Restorative", "Cosmetic", "Orthodontics"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-30 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max px-6 md:px-16 lg:px-24">
            {allServices.map((s, i) => (
              <button
                key={s.category}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeCategory === i
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <s.icon className="w-4 h-4" />
                {s.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail — Immersive Layout */}
      {allServices.map((service, idx) => (
        <div key={service.category} className={idx === activeCategory ? "block" : "hidden"}>
          {/* Category Hero Banner */}
          <section className={`w-full bg-gradient-to-r ${service.color} px-6 md:px-16 lg:px-24 py-12 lg:py-16`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                    {service.category}
                  </h2>
                  <p className="text-primary-foreground/70 text-sm mt-1">{service.tagline}</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-base lg:text-lg max-w-xl leading-relaxed lg:ml-auto">
                {service.description}
              </p>
            </div>
          </section>

          {/* Service Cards — Elevated Design */}
          <section className="w-full px-6 md:px-16 lg:px-24 py-12 lg:py-20">
            <div className="grid md:grid-cols-2 gap-6">
              {service.items.map((item, itemIdx) => (
                <div
                  key={item.name}
                  className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Number accent */}
                  <div className="absolute top-6 right-6 font-display text-6xl font-bold text-muted/30 select-none">
                    {String(itemIdx + 1).padStart(2, "0")}
                  </div>

                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors pr-12">
                      {item.name}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary rounded-full px-3 py-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          Consultation included
                        </span>
                      </div>

                      <a
                        href={`https://wa.me/2349022211645?text=${encodeURIComponent(`Hello! I'd like to book an appointment for ${item.name}. Please let me know available times.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity group-hover:shadow-lg"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}

      {/* Why Choose Us — Social Proof */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={clinicReception} alt="Clinic" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-8">
                Trusted by Over 1,000 Patients
              </h2>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                "The team at Our Lady's Dental Clinic made me feel completely at ease. Professional, gentle, and the results speak for themselves. I recommend them to everyone!"
              </p>
              <p className="text-gold font-semibold mt-4">— Verified Patient</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "5.0", label: "Google Rating" },
                { num: "1000+", label: "Patients Treated" },
                { num: "6+", label: "Specializations" },
                { num: "Same Day", label: "Emergency Care" },
              ].map((s) => (
                <div key={s.label} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-6 text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gold mb-1">{s.num}</div>
                  <div className="text-primary-foreground/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="w-full bg-secondary/30 px-6 md:px-16 lg:px-24 py-16 lg:py-24">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Explore</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">All Treatment Categories</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s, i) => (
            <button
              key={s.category}
              onClick={() => {
                setActiveCategory(i);
                window.scrollTo({ top: 500, behavior: "smooth" });
              }}
              className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/40 hover:shadow-xl transition-all text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.category}</h3>
              <p className="text-muted-foreground text-sm mb-3">{s.tagline}</p>
              <p className="text-muted-foreground text-xs mb-5">{s.items.length} treatments available</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View & Book <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Schedule a free consultation and let our expert team create the perfect treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2349022211645"
                className="bg-gold-shimmer text-foreground px-10 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href={`https://wa.me/2349022211645?text=${encodeURIComponent("Hello! I'd like to schedule a consultation. Please let me know available times.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/20 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

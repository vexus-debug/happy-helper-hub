import { Link } from "react-router-dom";
import {
  Star, Shield, Heart, Clock, CreditCard, Phone, ArrowRight, Play,
  CheckCircle2, Sparkles, MapPin, Users, Award, ChevronDown, Zap,
  Smile, ThumbsUp, CalendarCheck, MessageCircle
} from "lucide-react";
import Layout from "@/components/Layout";
import { useState, useEffect, useRef } from "react";

import clinicReception from "@/assets/clinic-reception.webp";
import clinicInterior from "@/assets/clinic-interior.webp";
import caseOrtho from "@/assets/case-orthodontics.webp";
import caseScaling from "@/assets/case-scaling.webp";
import caseBraces from "@/assets/case-braces.webp";
import caseAlignment from "@/assets/case-alignment.webp";
import caseBracesProgress from "@/assets/case-braces-progress.webp";
import heroImg from "@/assets/hero-dental.jpg";
import smileImg from "@/assets/happy-smile.jpg";
import dentistImg from "@/assets/dentist-portrait.jpg";

/* ─── Animate-on-scroll hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const Section = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ─── Counter animation ─── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

const services = [
  { icon: Shield, title: "Preventive Care", desc: "Scaling, polishing, routine exams & cavity fillings to keep your smile healthy.", link: "/services" },
  { icon: Heart, title: "Restorative Care", desc: "Root canals, crowns, bridges & implants — we rebuild what life wears down.", link: "/services" },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Professional teeth whitening & veneers for the smile you've always wanted.", link: "/services" },
  { icon: Smile, title: "Orthodontics", desc: "Braces & alignment solutions for a perfectly straight, confident smile.", link: "/services" },
];

const reviews = [
  { name: "Esther O.", text: "The treatment was awesome! The staff are so friendly and professional. I felt completely at ease the entire time.", stars: 5, service: "Teeth Whitening" },
  { name: "David A.", text: "Amazing experience. They explained everything patiently before any procedure. Truly world-class care right here in Effurun.", stars: 5, service: "Root Canal" },
  { name: "Blessing I.", text: "Best dental clinic in Effurun! I always leave with a confident smile. The clinic is so clean and modern.", stars: 5, service: "Scaling & Polishing" },
  { name: "Chidi N.", text: "My braces journey has been incredible. The team is supportive and professional. Highly recommend!", stars: 5, service: "Orthodontics" },
  { name: "Angela M.", text: "Finally found a dentist I trust. They take their time and explain everything. Wonderful experience!", stars: 5, service: "Dental Checkup" },
  { name: "Ifeanyi E.", text: "Top-notch facility. The hygiene standards are excellent and the staff made me feel right at home.", stars: 5, service: "Implants" },
];

const transformations = [
  { src: caseBraces, label: "Orthodontic Transformation" },
  { src: caseAlignment, label: "Perfect Alignment" },
  { src: caseScaling, label: "Deep Cleaning Results" },
  { src: caseOrtho, label: "Smile Makeover" },
];

const faqs = [
  { q: "Do you accept walk-in patients?", a: "Yes! While we recommend booking ahead for convenience, walk-ins are always welcome during our operating hours." },
  { q: "What payment methods do you accept?", a: "We accept cash, debit/credit cards, NFC mobile payments, and bank transfers. We also offer flexible payment plans for extensive treatments." },
  { q: "Is teeth whitening safe?", a: "Absolutely. Our professional whitening uses clinically proven products that are gentle on enamel while delivering dramatic, lasting results." },
  { q: "How often should I visit the dentist?", a: "We recommend a check-up and cleaning every 6 months to maintain optimal oral health and catch any issues early." },
  { q: "Do you treat children?", a: "Yes! We love treating patients of all ages. Our team is gentle and experienced with children to make their visit comfortable and fun." },
];

const trustMarqueeItems = [
  "✦ 5-Star Patient Rating",
  "✦ 1000+ Happy Patients",
  "✦ Modern Equipment",
  "✦ Flexible Payment Options",
  "✦ 10+ Years Experience",
  "✦ Effurun's #1 Dental Clinic",
  "✦ Same-Day Appointments",
  "✦ Expert Dental Team",
];

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeReview, setActiveReview] = useState(0);

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stat1 = useCounter(1000);
  const stat2 = useCounter(10);
  const stat3 = useCounter(8);

  return (
    <Layout>
      {/* ════════════════════ TRUST MARQUEE ════════════════════ */}
      <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden -mt-20 relative z-10">
        <div className="marquee flex gap-10 whitespace-nowrap">
          {[...trustMarqueeItems, ...trustMarqueeItems].map((item, i) => (
            <span key={i} className="text-xs font-semibold tracking-wider uppercase opacity-80">{item}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Our Lady's Dental Clinic — modern treatment room" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/50 to-foreground/85" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-gold/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/25 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5" /> Effurun's #1 Rated Dental Clinic
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.08] mb-6">
              Your Smile<br />Deserves the <span className="text-gold">Very Best</span>
            </h1>
            <p className="text-primary-foreground/75 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Step into a world where cutting-edge dentistry meets genuine care. We don't just treat teeth — we transform confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+2349022211645" className="group bg-gold-shimmer text-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-gold/25 active:scale-95">
                <Phone className="w-5 h-5 group-hover:animate-pulse" /> Book Your Visit
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="glass-dark text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/15 transition-all flex items-center gap-2 active:scale-95"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <Play className="w-4 h-4 text-gold ml-0.5" />
                </div>
                Watch Tour
              </button>
            </div>
          </div>

          {/* Floating stats - glass cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { val: "5★", label: "Patient Rating" },
              { val: "1000+", label: "Happy Patients" },
              { val: "8+", label: "Services Offered" },
              { val: "6 Days", label: "Open Weekly" },
            ].map((s, i) => (
              <div key={s.label} className="glass-dark rounded-2xl p-4 md:p-5 text-center hover:bg-primary-foreground/10 transition-colors" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-2xl md:text-3xl font-display font-bold text-gold">{s.val}</p>
                <p className="text-[11px] text-primary-foreground/50 mt-1 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* ════════════════════ WELCOME / INTRO ════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 lg:py-28 overflow-hidden">
        <Section>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-3xl" />
              <img src={clinicReception} alt="Welcoming clinic reception" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" loading="lazy" />
              <div className="absolute -bottom-5 -right-3 md:-right-6 glass rounded-2xl shadow-xl p-4 md:p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-lg">5-Star Rated</p>
                    <p className="text-muted-foreground text-xs">by 1000+ patients</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Welcome to Our Lady's</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                We Believe Every Smile Tells a <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>You deserve a dental experience that feels different — one where you're heard, respected, and genuinely cared for. That's exactly what we've built at Our Lady's Dental Clinic.</p>
                <p>Located in the heart of Effurun, our modern clinic combines advanced technology with a warm, reassuring environment. From your very first visit, you'll feel the difference.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { icon: Clock, text: "Mon–Sat Open" },
                  { icon: CreditCard, text: "Card & NFC Pay" },
                  { icon: Star, text: "5-Star Rated" },
                  { icon: Shield, text: "Expert Team" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3 text-sm font-medium text-foreground glass rounded-xl p-3.5 hover:shadow-md transition-shadow">
                    <f.icon className="w-5 h-5 text-primary flex-shrink-0" /> {f.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ ANIMATED COUNTER STRIP ════════════════════ */}
      <section className="bg-hero-gradient py-14 lg:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 px-4 text-center">
          {[
            { ref: stat1.ref, count: stat1.count, suffix: "+", label: "Happy Patients" },
            { ref: stat2.ref, count: stat2.count, suffix: "+", label: "Years Experience" },
            { ref: stat3.ref, count: stat3.count, suffix: "+", label: "Service Categories" },
          ].map((s) => (
            <div key={s.label} ref={s.ref}>
              <p className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
                {s.count}{s.suffix}
              </p>
              <p className="text-primary-foreground/60 text-xs md:text-sm mt-1 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ SERVICES ════════════════════ */}
      <section className="bg-foreground px-4 md:px-8 lg:px-16 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <Section>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">What We Do For You</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Comprehensive Care,<br />One Clinic
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {services.map((s, i) => (
                <Section key={s.title} delay={i * 100}>
                  <Link to={s.link} className="group block glass-dark rounded-2xl p-7 md:p-8 hover:bg-primary-foreground/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 group-hover:scale-110 transition-all">
                        <s.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{s.title}</h3>
                          <ArrowRight className="w-4 h-4 text-primary-foreground/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-primary-foreground/55 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </Link>
                </Section>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="group bg-gold-shimmer text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-gold/20 active:scale-95">
                Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ OUR CLINIC ════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 lg:py-28 overflow-hidden">
        <Section>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Clinic</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                A Space Built for <span className="text-gradient">Your Comfort</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our modern facility is designed with your comfort in mind — from the calming reception area to our fully equipped treatment rooms. Every detail ensures a stress-free dental experience.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "State-of-the-art equipment & sterilisation protocols",
                  "Welcoming, family-friendly environment",
                  "Centrally located on Airport Road, Effurun — easy to find",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                <Sparkles className="w-5 h-5" /> View Our Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-3xl" />
              <img src={clinicInterior} alt="Our modern dental clinic interior" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]" loading="lazy" />
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">5-Star Rated</p>
                    <p className="text-muted-foreground text-xs">by Our Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ TRANSFORMATIONS ════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 lg:py-28 bg-secondary/30">
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Real Results</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                See the Transformations<br />We Make Possible
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Every smile here is a real patient who trusted us with their journey.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {transformations.map((t, i) => (
                <Section key={t.label} delay={i * 80}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                    <img src={t.src} alt={t.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-primary-foreground text-sm font-semibold">{t.label}</p>
                      <p className="text-primary-foreground/50 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">View Details →</p>
                    </div>
                  </div>
                </Section>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/gallery" className="group text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ CLINIC TOUR ════════════════════ */}
      <section className="bg-card px-4 md:px-8 lg:px-16 py-20 lg:py-28">
        <Section>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Step Inside</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                A Clinic Built Around <span className="text-gradient">Your Comfort</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From the moment you walk through our doors, you'll notice the difference. Our modern, spotlessly clean facility is designed to put you at ease.
              </p>
              <ul className="space-y-3 mb-8">
                {["State-of-the-art equipment", "Spotless, sterilized environment", "Comfortable waiting area", "Friendly, welcoming staff"].map((item, i) => (
                  <Section key={item} delay={i * 80}>
                    <li className="flex items-center gap-3 text-foreground text-sm font-medium bg-secondary/50 rounded-xl p-3 hover:bg-secondary transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> {item}
                    </li>
                  </Section>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img src={clinicInterior} alt="Modern clinic interior" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play clinic tour video"
              >
                <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform ring-4 ring-gold/20">
                  <Play className="w-8 h-8 text-foreground ml-1" />
                </div>
              </button>
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ YOUR JOURNEY ════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 lg:py-28 bg-secondary/20">
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Your Journey With Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Three Simple Steps to<br />Your Best Smile
              </h2>
            </div>
            <div className="space-y-0">
              {[
                { step: "01", title: "Book Your Visit", desc: "Call us or walk in. We'll find a time that works perfectly for your schedule — no long waits, no hassle.", icon: Phone },
                { step: "02", title: "Get Expert Care", desc: "Our experienced dental team will assess, explain, and treat with precision and genuine care. You're always in control.", icon: Heart },
                { step: "03", title: "Smile with Confidence", desc: "Walk out feeling incredible. Whether it's a routine clean or a full transformation — your smile is our masterpiece.", icon: Sparkles },
              ].map((s, i) => (
                <Section key={s.step} delay={i * 120}>
                  <div className="flex gap-6 md:gap-8 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        {s.step}
                      </div>
                      {i < 2 && <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent" />}
                    </div>
                    <div className="pb-12">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ TESTIMONIALS — CAROUSEL ════════════════════ */}
      <section className="bg-foreground px-4 md:px-8 lg:px-16 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <Section>
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Patient Love</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                What Our Patients Say
              </h2>
            </div>

            {/* Featured review */}
            <div className="glass-dark rounded-3xl p-8 md:p-12 text-center mb-8 min-h-[280px] flex flex-col justify-center transition-all duration-500">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[activeReview].stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 font-light italic max-w-2xl mx-auto">
                "{reviews[activeReview].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">{reviews[activeReview].name[0]}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-primary-foreground">{reviews[activeReview].name}</p>
                  <p className="text-primary-foreground/40 text-xs">{reviews[activeReview].service}</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeReview ? "w-8 bg-gold" : "w-2 bg-primary-foreground/20 hover:bg-primary-foreground/40"}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ WHY CHOOSE US ════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 lg:py-28">
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                The Our Lady's <span className="text-gradient">Difference</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Shield, title: "Trusted Expertise", desc: "A team with 10+ years of clinical experience and ongoing professional development." },
                { icon: Heart, title: "Genuine Compassion", desc: "We treat every patient like family — with patience, honesty, and heartfelt care." },
                { icon: Sparkles, title: "Modern Technology", desc: "State-of-the-art equipment ensuring precise diagnosis and comfortable treatment." },
                { icon: CreditCard, title: "Flexible Payments", desc: "Multiple payment options including cards, NFC, transfers, and installment plans." },
                { icon: MapPin, title: "Central Location", desc: "Conveniently located on Airport Road, Effurun — easy to find and accessible." },
                { icon: ThumbsUp, title: "Proven Results", desc: "1000+ happy patients and a consistent 5-star rating speak for our quality." },
              ].map((item, i) => (
                <Section key={item.title} delay={i * 80}>
                  <div className="group glass rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ FAQ ════════════════════ */}
      <section className="bg-secondary/30 px-4 md:px-8 lg:px-16 py-20 lg:py-28">
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Common Questions</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Frequently Asked<br />Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <Section key={i} delay={i * 60}>
                  <div className="glass rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <span className="font-display font-semibold text-foreground text-base pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48 pb-5 md:pb-6" : "max-h-0"}`}>
                      <p className="px-5 md:px-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ LOCATION / MAP ════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 lg:py-28 bg-card">
        <Section>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Visit Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Easy to Find,<br /><span className="text-gradient">Hard to Forget</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, label: "Top Floor, Our Lady's Shopping Mall, 100 Airport Road, Effurun" },
                  { icon: Phone, label: "+234 902 221 1645" },
                  { icon: Clock, label: "Mon–Fri: 9AM–5PM · Sat: 10AM–4PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pt-2">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-hero-gradient text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                Get Directions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border h-[350px] lg:h-[400px]">
              <iframe
                title="Our Lady's Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3!2d5.78!3d5.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMDAuMCJOIDXCsDQ2JzQ4LjAiRQ!5e0!3m2!1sen!2sng!4v1!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Section>
      </section>

      {/* ════════════════════ CTA BANNER ════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={smileImg} alt="Happy patient smiling" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-teal-deep/92" />
        </div>
        <div className="absolute top-10 right-10 w-60 h-60 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative z-10 px-4 md:px-8 lg:px-16 py-24 lg:py-32">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <MessageCircle className="w-3.5 h-3.5" /> Let's Talk About Your Smile
              </div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Ready to Start<br />Your Smile Journey?
              </h2>
              <p className="text-primary-foreground/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Your perfect smile is just one call away. Book your appointment today and let us take care of the rest.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+2349022211645" className="group bg-gold-shimmer text-foreground px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/25">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" /> Call Now
                </a>
                <a href="https://wa.me/2349022211645" target="_blank" rel="noopener noreferrer" className="glass-dark text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/15 transition-all inline-flex items-center gap-2 active:scale-95">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ════════════════════ VIDEO MODAL ════════════════════ */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setVideoOpen(false)}>
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay className="w-full" poster={clinicInterior}>
              <source src="/videos/clinic-video.mp4" type="video/mp4" />
            </video>
          </div>
          <button onClick={() => setVideoOpen(false)} className="absolute top-6 right-6 glass-dark text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-foreground/15 transition-colors">
            ✕ Close
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Index;

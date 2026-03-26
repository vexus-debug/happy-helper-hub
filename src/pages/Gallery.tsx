import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";

import clinicReception from "@/assets/clinic-reception.webp";
import clinicInterior from "@/assets/clinic-interior.webp";
import caseOrtho from "@/assets/case-orthodontics.webp";
import caseScaling from "@/assets/case-scaling.webp";
import caseBraces from "@/assets/case-braces.webp";
import caseAlignment from "@/assets/case-alignment.webp";
import caseBracesProgress from "@/assets/case-braces-progress.webp";
import heroImg from "@/assets/hero-dental.jpg";

const images = [
  { src: clinicReception, label: "Clinic Reception Area", category: "clinic" },
  { src: clinicInterior, label: "Clinic Interior", category: "clinic" },
  { src: heroImg, label: "Modern Treatment Room", category: "clinic" },
  { src: caseBraces, label: "Before & After — Orthodontic Treatment", category: "cases" },
  { src: caseAlignment, label: "Before & After — Teeth Alignment", category: "cases" },
  { src: caseScaling, label: "Before & After — Scaling & Polishing", category: "cases" },
  { src: caseOrtho, label: "Orthodontic Case Study", category: "cases" },
  { src: caseBracesProgress, label: "Braces Treatment In Progress", category: "cases" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "clinic" | "cases">("all");

  const filtered = filter === "all" ? images : images.filter((i) => i.category === filter);

  return (
    <Layout>
      <section className="bg-hero-gradient section-padding text-center">
        <div className="container mx-auto">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Gallery</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">See Our Work</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Tour our clinic and see real patient transformations.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex justify-center gap-3 mb-10">
            {(["all", "clinic", "cases"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === f ? "bg-hero-gradient text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f === "all" ? "All" : f === "clinic" ? "Our Clinic" : "Patient Cases"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img) => (
              <button
                key={img.label}
                onClick={() => setSelected(img.src)}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end p-4">
                  <p className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Watch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Clinic Video Tour</h2>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video controls className="w-full" poster={heroImg}>
              <source src="/videos/clinic-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setSelected(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={selected} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl object-contain" />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

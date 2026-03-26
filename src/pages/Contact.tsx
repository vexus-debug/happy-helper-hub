import Layout from "@/components/Layout";
import { Phone, MapPin, Clock, CreditCard, Instagram, Mail } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="bg-hero-gradient section-padding text-center">
      <div className="container mx-auto">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out to book an appointment or ask any questions.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Contact Information</h2>
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Phone (Line 1)", value: "+234 902 221 1645", href: "tel:+2349022211645" },
              { icon: Phone, label: "Phone (Line 2)", value: "+234 806 298 9492", href: "tel:+2348062989492" },
              { icon: MapPin, label: "Address", value: "Top Floor, Our Lady's Shopping Mall, 100 Airport Road, opposite Ugborikoko Junction, Effurun, Delta State" },
              { icon: Instagram, label: "Instagram", value: "Follow us on Instagram", href: "https://instagram.com" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-semibold text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Hours of Operation</h3>
            <div className="bg-secondary/50 rounded-xl p-6 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Monday – Friday</span><span className="font-semibold text-foreground">9:00 AM – 5:00 PM</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-semibold text-foreground">8:00 AM – 4:00 PM</span></div></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-semibold text-foreground">Closed</span></div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Payment Methods</h3>
            <div className="flex gap-3">
              {["Credit Card", "Debit Card", "NFC Mobile"].map((p) => (
                <span key={p} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1">
                  <CreditCard className="w-3 h-3" /> {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[400px]">
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
          <p className="text-muted-foreground text-sm mt-4 text-center">
            Opposite Ugborikoko Junction, along Airport Road, Effurun
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;

import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="bg-hero-gradient section-padding text-center">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Privacy Policy & Disclaimer</h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl prose prose-lg">
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Privacy Policy</h2>
            <p>Our Lady's Dental Clinic ("we", "us", or "our") is committed to protecting the privacy of our patients and visitors. This policy outlines how we collect, use, and safeguard your personal information.</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Information We Collect</h3>
            <p>We may collect personal information including your name, phone number, email address, and dental health records when you visit our clinic, book an appointment, or interact with us through our website or social media channels.</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide dental care and treatment services</li>
              <li>To schedule and manage appointments</li>
              <li>To communicate with you about your treatment</li>
              <li>To improve our services and patient experience</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Patient records are kept confidential in accordance with applicable healthcare regulations.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only. It is not intended as medical advice and should not be used as a substitute for professional dental consultation, diagnosis, or treatment.</p>
            <p className="mt-3">All images of patient cases shown on this website are used with patient consent. Individual results may vary. Before-and-after photos represent specific patient outcomes and do not guarantee similar results.</p>
            <p className="mt-3">While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information provided.</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Contact Us</h3>
            <p>If you have any questions about this privacy policy, please contact us at <a href="tel:+2349022211645" className="text-primary font-semibold hover:underline">+234 902 221 1645</a> or visit our clinic at Top Floor, Our Lady's Shopping Mall, 100 Airport Road, Effurun, Delta State.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;

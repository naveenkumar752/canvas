import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          tag="contact"
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hello? Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="surface-card p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-foreground font-medium">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-foreground font-medium">Available on request</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                  <p className="text-foreground font-medium">Naveenkumar M</p>
                </div>
              </div>
            </div>

            {/* Terminal style */}
            <div className="surface-card p-4 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo "Let's build something amazing together!"
              </p>
              <p className="text-green-400 mt-1">→ Let's build something amazing together!</p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <form
              className="surface-card p-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for reaching out! I'll get back to you soon.");
              }}
            >
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

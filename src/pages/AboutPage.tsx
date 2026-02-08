import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Award, Rocket, Code2, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Languages", value: "Ruby, JS, TS" },
  { icon: Rocket, label: "Frameworks", value: "Rails, React, Node" },
  { icon: Award, label: "Certification", value: "AWS Developer" },
  { icon: Users, label: "Experience", value: "2+ Years" },
];

const AboutPage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="about"
          title="About Me"
          subtitle="A brief introduction to who I am and what I do."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-foreground text-lg leading-relaxed">
              Passionate and detail-oriented Junior Software Engineer skilled in{" "}
              <span className="text-primary font-medium">Ruby, Rails, CoffeeScript, React.js, Node.js, JavaScript, TypeScript, HTML, CSS, AWS, and Bootstrap</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about building scalable web applications and optimizing both frontend and backend performance. I thrive in collaborative environments where I can contribute to solving complex problems while continuously learning new technologies.
            </p>

            {/* AWS Certification callout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="surface-card glow-border p-6 mt-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg">
                    ✅ AWS Certified Developer – Associate
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    Proud to have earned this certification! This journey has strengthened my cloud development skills and deepened my understanding of AWS services. Grateful for the opportunity and support from Jothi Software in this learning journey. Onward to new challenges! 💡🚀
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <div className="border-l-2 border-primary pl-4 mt-6">
              <p className="text-muted-foreground italic">
                "Always eager to learn and grow — building one feature at a time."
              </p>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="surface-card p-5 text-center hover:border-primary/30 transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-foreground font-semibold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

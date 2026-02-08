import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Ruby", "JavaScript", "TypeScript", "HTML5", "CSS", "CoffeeScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Ruby on Rails", "React.js", "Node.js", "Ant Design", "Bootstrap"],
  },
  {
    title: "AWS Services",
    skills: ["AWS Lambda", "Amazon S3", "AWS IAM", "Amazon Cognito", "AWS CodeCommit"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Management", "Presentations", "Communication", "Training", "Engineering"],
  },
];

const SkillsPage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="skills"
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with every day."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="surface-card p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-sm mb-4">{`> ${cat.title}`}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AWS Certification badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 surface-card glow-border p-8 text-center max-w-xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-3xl">🏆</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">AWS Certified Developer – Associate</h3>
          <p className="text-muted-foreground text-sm mt-2">
            Amazon Web Services · Officially Certified
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    institution: "BSA Crescent Institute of Science and Technology",
    degree: "Bachelor of Technology (BTech)",
    field: "Computer and Information Sciences",
    period: "Jul 2021 – Aug 2024",
    grade: null,
    skills: ["Management", "Presentations", "Problem Solving"],
  },
  {
    institution: "Sri Balaji Polytechnic College",
    degree: "Diploma of Education",
    field: "Computer Engineering",
    period: "2019",
    grade: null,
    skills: ["Management", "Presentations", "Problem Solving"],
  },
  {
    institution: "Victoria Memorial Govt Boys HSS",
    degree: "HSC",
    field: "Biology/Biological Sciences, General",
    period: "Jun 2017 – Jun 2019",
    grade: "A",
    skills: [],
  },
  {
    institution: "Victoria Memorial Govt Boys HSS",
    degree: "SSLC",
    field: "General Studies",
    period: "Jun 2015 – Jun 2017",
    grade: "B",
    skills: [],
  },
];

const EducationPage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          tag="education"
          title="Education"
          subtitle="My academic journey and the foundation of my career."
        />

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="surface-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">{edu.institution}</h3>
                  <p className="text-foreground font-medium text-sm mt-1">
                    {edu.degree} — {edu.field}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <Calendar className="w-3 h-3" /> {edu.period}
                    {edu.grade && (
                      <span className="ml-3 px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                  {edu.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.skills.map((s) => (
                        <span key={s} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;

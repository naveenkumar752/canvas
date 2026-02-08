import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Jothi Software Private Ltd",
    location: "Chennai, Tamil Nadu, India · On-site",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        period: "Jun 2025 – Present",
        duration: "8 mos",
        description:
          "Promoted from Junior Software Engineer. Leading development of scalable web applications using Ruby on Rails, React.js, Node.js, and modern technologies. Driving architecture decisions and delivering high-quality solutions.",
        skills: ["Ruby on Rails", "Ruby", "React.js", "Node.js", "JavaScript", "TypeScript", "MySQL", "HTML5", "CSS", "Ant Design", "Bootstrap"],
      },
      {
        title: "Junior Software Engineer",
        type: "Full-time",
        period: "Jul 2024 – Jun 2025",
        duration: "1 yr",
        description:
          "Built and maintained web applications using Ruby on Rails, React.js, Node.js, and other modern technologies. Focused on delivering high-quality, scalable solutions.",
        skills: ["Ruby on Rails", "Ruby", "React.js", "Node.js", "JavaScript", "TypeScript", "MySQL", "HTML5", "CSS", "Ant Design", "Bootstrap"],
      },
      {
        title: "Intern",
        type: "Part-time",
        period: "Jun 2023 – Jun 2024",
        duration: "1 yr 1 mo",
        description:
          "Worked as a part-time intern, gaining hands-on experience in React.js, Node.js, TypeScript, AWS, and the Ant Design framework. Collaborated effectively within a team, enhancing problem-solving and communication skills.",
        skills: ["React.js", "Node.js", "TypeScript", "AWS", "Ant Design"],
      },
    ],
  },
  {
    company: "Nokia Solutions And Networks India Pvt Ltd",
    location: "Chennai, Tamil Nadu, India · On-site",
    roles: [
      {
        title: "Student Intern",
        type: "Internship",
        period: "Aug 2020 – Sep 2020",
        duration: "2 mos",
        description:
          "Completed a short-term internship gaining exposure to networking solutions and enterprise-grade software development practices.",
        skills: [],
      },
    ],
  },
];

const ExperiencePage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          tag="experience"
          title="Work Experience"
          subtitle="My professional journey so far — building, learning, and growing."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background hidden md:block" />

                <div className="surface-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground mt-1 sm:mt-0">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {exp.roles.map((role) => (
                      <div key={role.title} className="border-l-2 border-primary/30 pl-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-foreground">{role.title}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono">
                            {role.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                          <Calendar className="w-3 h-3" />
                          {role.period} · {role.duration}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                        {role.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ tag, title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <span className="font-mono text-primary text-sm mb-2 block">{`// ${tag}`}</span>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground max-w-2xl">{subtitle}</p>
    )}
    <div className="mt-4 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
  </motion.div>
);

export default SectionHeading;

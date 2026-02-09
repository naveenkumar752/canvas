import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Terminal, Code2, Cloud } from "lucide-react";

const HeroPage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-primary text-sm flex items-center gap-2 mb-6">
                <Terminal className="w-4 h-4" />
                Hello, World! I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="text-foreground">Naveen</span>
              <br />
              <span className="text-gradient glow-text">kumar M</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl text-muted-foreground font-light max-w-lg"
            >
              Software Engineer building scalable web applications with
              <span className="text-foreground font-medium"> ROR</span>,
              <span className="text-foreground font-medium"> React.js</span>, and
              <span className="text-foreground font-medium"> AWS</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                About Me <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
              >
                <Download className="w-4 h-4" /> Get in Touch
              </Link>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                Currently building at <span className="text-foreground">JSPVTLTD</span>
              </span>
            </motion.div>
          </div>

          {/* Right - Code block aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="surface-card glow-border p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-muted-foreground text-xs">naveenkumar.ts</span>
              </div>
              <pre className="text-muted-foreground leading-relaxed">
                <code>
{`const `}<span className="text-primary">naveenkumar</span>{` = {
  `}<span className="text-foreground">role</span>{`: `}<span className="text-green-400">"Software Engineer"</span>{`,
  `}<span className="text-foreground">skills</span>{`: [`}
    <span className="text-green-400">"React.js"</span>{`,`}
    <span className="text-green-400">"Node.js"</span>{`,`}
    <span className="text-green-400">"TypeScript"</span>{`,`}
    <span className="text-green-400">"AWS"</span>
  {`],
  `}<span className="text-foreground">certified</span>{`: `}<span className="text-primary">true</span>{`,
  `}<span className="text-foreground">passion</span>{`: `}<span className="text-green-400">"Building scalable apps"</span>
{`};`}
                </code>
              </pre>
            </div>

            {/* Floating badges */}
            <div className="mt-6 flex gap-3 justify-center">
              {[
                { icon: Code2, label: "Full Stack" },
                { icon: Cloud, label: "AWS Certified" },
                { icon: Terminal, label: "2+ Yrs Exp" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  <badge.icon className="w-3 h-3 text-primary" />
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;



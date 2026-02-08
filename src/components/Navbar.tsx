import { motion } from "framer-motion";
import { NavLink as RouterNavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <RouterNavLink to="/" className="font-mono text-primary font-bold text-lg tracking-tight">
          {"<NK />"}
        </RouterNavLink>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <RouterNavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`
                }
              >
                {item.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <MobileMenu />
      </nav>
    </motion.header>
  );
};

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2 text-muted-foreground hover:text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </summary>
        <div className="absolute right-0 mt-2 w-48 glass border border-border rounded-lg p-2 shadow-xl">
          {navItems.map((item) => (
            <RouterNavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </div>
      </details>
    </div>
  );
};

export default Navbar;

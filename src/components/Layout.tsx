import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-border py-8 text-center">
        <p className="text-muted-foreground text-sm">
          <span className="font-mono text-primary">{"<"}</span>
          {" Built with passion by "}
          <span className="text-foreground font-medium">Naveenkumar M</span>
          {" "}
          <span className="font-mono text-primary">{"/>"}</span>
        </p>
      </footer>
    </div>
  );
};

export default Layout;

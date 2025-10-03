import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { ProofOfImpact } from "./components/ProofOfImpact";
import { AIDeploymentArticle } from "./components/AIDeploymentArticle";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import Chatbot from "./components/Chatbot";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="camwood-ui-theme">
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <Services />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <Products />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <ProofOfImpact />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <AIDeploymentArticle />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <About />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}